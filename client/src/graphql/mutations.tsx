// mutations.tsx

import { gql } from '@apollo/client';

export const ADD_PRODUCT_MUTATION = gql`
  mutation addProduct(
    $name: String
    $description: String
    $price: Float
    $stock: Int
    $category: String
    $manufacturer: String
    $imageUrl: String
    $isActive: Boolean
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      stock: $stock
      category: $category
      manufacturer: $manufacturer
      imageUrl: $imageUrl
      isActive: $isActive
    ) {
      id
      name
      description
      price
      stock
      category
      manufacturer
      imageUrl
      isActive
    }
  }
`;
