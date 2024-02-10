// ExampleComponent.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import Link from "next/link";

const ExampleComponent: React.FC = () => {
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
      {productData && !Array.isArray(productData) ? (
        <div>
          <h2>Product Data</h2>
          <ul>
            <li key={productData.id}>
              <h3>{productData.name}</h3>
              <p>Description: {productData.description}</p>
              <p>Price: ${productData.price}</p>
              {/* Add other product information as needed */}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default ExampleComponent;
