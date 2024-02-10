// productActions.tsx
import { Product } from '../types'; // Replace 'Product' with the actual type of your product object

export const fetchProductRequest = () => ({ type: 'FETCH_PRODUCT_REQUEST' });
export const fetchProductSuccess = (product: Product) => ({ type: 'FETCH_PRODUCT_SUCCESS', payload: product });
export const fetchProductFailure = (error: string) => ({ type: 'FETCH_PRODUCT_FAILURE', payload: error });
 