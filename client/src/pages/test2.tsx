// ExampleComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductRequest } from '../actions/productActions';
import { RootState } from '../store/reducers';
import Link from "next/link";
import { Product } from '../types/product'; // Import the Product type

const ExampleComponent: React.FC = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: RootState) => state.product.data);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);


  return (
    <div>
      <Link href="/test">
        <p>Products</p>
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {productData && Array.isArray(productData) && productData.length > 0 ? (
        <div>
          <h2>Product Data</h2>
          <ul>
            {productData.map((product: Product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Category: {product.category}</p>
                <p>Manufacturer: {product.manufacturer}</p>
                <p>Image URL: {product.imageUrl}</p>
                <p>Is Active: {product.isActive ? 'Yes' : 'No'}</p>
                <p>Colors: {product.colors.map(color => color.name).join(', ')}</p>
                <p>Sizes: {product.sizes.map(size => size.name).join(', ')}</p>
                <p>Reference: {product.ref}</p>
                {/* Add other product information as needed */}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default ExampleComponent;
