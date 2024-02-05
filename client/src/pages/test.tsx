//test.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_MUTATION } from '../graphql/mutations';
import axios from 'axios';


interface FormData {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  manufacturer: string;
  imageUrl: File | null;
  isActive: boolean;
  colors: string[]; // Added colors field
  sizes: string[];  // Added sizes field
  ref: string;      // Added ref field
}

const AddProductPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [colors, setColors] = useState<string[]>([]); // Added state for colors
  const [sizes, setSizes] = useState<string[]>([]);   // Added state for sizes
  const [ref, setRef] = useState("");                 // Added state for ref

  const [addProductMutation] = useMutation(ADD_PRODUCT_MUTATION);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageUrl(file);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(checked ? 0 : parseFloat(value) || 0);
        break;
      case 'stock':
        setStock(checked ? 0 : parseFloat(value) || 0);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'manufacturer':
        setManufacturer(value);
        break;
      case 'imageUrl':
        // Do nothing for now, handleImageChange will handle it
        break;
      case 'isActive':
        setIsActive(checked);
        break;
      case 'colors':
        setColors(value.split(',')); // Assuming colors are comma-separated
        break;
      case 'sizes':
        setSizes(value.split(','));  // Assuming sizes are comma-separated
        break;
      case 'ref':
        setRef(value);
        break;

      default:
        break;
    }
  };






  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();

  // Assuming 'data' should be extracted from the form data
  const formData = new FormData(e.currentTarget);
  const data: FormData = {
    name,
    description,
    price,
    stock,
    category,
    manufacturer,
    imageUrl: formData.get('imageUrl') as File,
    isActive,
    colors,
    sizes,
    ref,
  };

  try {
    // Upload image and get the URL
    const uploadedImageUrl = data.imageUrl ? await uploadImage(data.imageUrl) : null;

    // Call addProductMutation with image URL and form data
    const { data: mutationData } = await addProductMutation({
      variables: {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        category: data.category,
        manufacturer: data.manufacturer,
        imageUrl: uploadedImageUrl,
        isActive: data.isActive,
        colors: data.colors,
        sizes: data.sizes,
        ref: data.ref,
      },
    });

    console.log('Product added:', mutationData.addProduct);
  } catch (error) {
    console.error('Error adding product:', error);
  }
};











const uploadImage = async (image: File | null) => {

  if (!image) {
    // Handle the case when image is null (if needed)
    return null;
  }

  
  try {
      const formData = new FormData();
      formData.append('image', image);
      
      

  
      console.log('FormData:', formData); // Add this log
      
      const response = await axios.post('/api/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
  
      if (!response.data || !response.data.imageUrl) {
        throw new Error('Image upload failed: Response data is missing.');
      }
  
      console.log('Response:', response); // Add this log


      console.log('Image uploaded successfully:', response.data.imageUrl);
      return response.data.imageUrl;
    } catch (error) {
      console.error('Error uploading image:', (error as Error).message);
      throw error;
    }
  };
  
  
  
  
  
  


  

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label>
      Name:
      <input type="text" name="name" value={name} onChange={handleInputChange} />
    </label>
    <label>
      Description:
      <input type="text" name="description" value={description} onChange={handleInputChange} />
    </label>
    <label>
      Price:
      <input type="number" name="price" value={price} onChange={handleInputChange} />
    </label>
    <label>
      Stock:
      <input type="number" name="stock" value={stock} onChange={handleInputChange} />
    </label>
    <label>
      Category:
      <input type="text" name="category" value={category} onChange={handleInputChange} />
    </label>
    <label>
      Manufacturer:
      <input type="text" name="manufacturer" value={manufacturer} onChange={handleInputChange} />
    </label>
    <label>
      Image:
      <input type="file" accept="image/*" name="imageUrl" onChange={handleImageChange} />
    </label>
    <label>
      Is Active:
      <input type="checkbox" name="isActive" checked={isActive} onChange={handleInputChange} />
    </label>
      <label>
        Colors (comma-separated):
        <input type="text" name="colors" value={colors.join(',')} onChange={handleInputChange} />
      </label>
      <label>
        Sizes (comma-separated):
        <input type="text" name="sizes" value={sizes.join(',')} onChange={handleInputChange} />
      </label>
      <label>
        Ref:
        <input type="text" name="ref" value={ref} onChange={handleInputChange} />
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductPage;
