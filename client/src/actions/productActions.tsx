// productActions.tsx
import { Product } from '../types'; // Replace 'Product' with the actual type of your product object

export const fetchProductRequest = () => ({ type: 'FETCH_PRODUCT_REQUEST' });
export const fetchProductSuccess = (products: Product) => ({ type: 'FETCH_PRODUCT_SUCCESS', payload: products });
export const fetchProductFailure = (error: string) => ({ type: 'FETCH_PRODUCT_FAILURE', payload: error });
 