import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_MUTATION } from '../graphql/mutations';

interface FormData {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  manufacturer: string;
  imageUrl: File | null;
  isActive: boolean;
}

const AddProductPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [isActive, setIsActive] = useState(true);

  const [addProductMutation] = useMutation(ADD_PRODUCT_MUTATION);

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
      default:
        break;
    }
  };
  

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageUrl(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await addProductMutation({
        variables: {
          name,
          description,
          price,
          stock,
          category,
          manufacturer,
          imageUrl,
          isActive,
        },
      });

      console.log('Product added:', data.addProduct);
    } catch (error) {
      console.error('Error adding product:', error);
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
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductPage;
