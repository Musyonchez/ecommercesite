//test.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_MUTATION } from "../../graphql/mutations";
import axios from "axios";


const AddProductPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [ref, setRef] = useState("");

  const [addProductMutation] = useMutation(ADD_PRODUCT_MUTATION);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(type === "checkbox" ? (checked ? 0 : parseFloat(value) || 0) : parseFloat(value) || 0);
        break;
      case "stock":
        setStock(type === "checkbox" ? (checked ? 0 : parseFloat(value) || 0) : parseFloat(value) || 0);
        break;
      case "category":
        setCategory(value);
        break;
      case "manufacturer":
        setManufacturer(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;
      case "isActive":
        setIsActive(checked);
        break;
      case "colors":
        setColors(value.split(","));
        break;
      case "sizes":
        setSizes(value.split(","));
        break;
      case "ref":
        setRef(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addProductMutation({
        variables: {
          name: name,
          description: description,
          price: price,
          stock: stock,
          category: category,
          manufacturer: manufacturer,
          imageUrl: imageUrl,
          isActive: isActive,
          colors: colors,
          sizes: sizes,
          ref: ref,
        },
      });

      console.log("Product added:", data.addProduct); // Fix: Access 'data' instead of 'mutationData'
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
    <label className="mb-2">
      <span className="text-lg font-semibold">Name:</span>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        className="w-full mt-1 p-2 border rounded"
      />
    </label>
    <label className="mb-2">
      <span className="text-lg font-semibold">Description:</span>        
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Price:</span>        
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Stock:</span>        
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Category:</span>        
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Manufacturer:</span>        
        <input
          type="text"
          name="manufacturer"
          value={manufacturer}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Image:</span>        
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold mr-5">Is Active:</span>        
        <input
          type="checkbox"
          name="isActive"
          checked={isActive}
          onChange={handleInputChange}

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Colors (comma-separated):</span>        
        <input
          type="text"
          name="colors"
          value={colors.join(",")}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Sizes (comma-separated):</span>
        <input
          type="text"
          name="sizes"
          value={sizes.join(",")}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>
      <label className="mb-2">
      <span className="text-lg font-semibold">Ref:</span>        
        <input
          type="text"
          name="ref"
          value={ref}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded"

        />
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductPage;
