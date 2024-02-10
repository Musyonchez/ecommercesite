// graphql/querys.tsx
import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      stock
      category
      manufacturer
      imageUrl
      isActive
      colors {
        id
        name
      }
      sizes {
        id
        name
      }
      ref
    }
  }
`;