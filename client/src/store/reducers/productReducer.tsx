// store/reducers/productReducer.ts
import { Action } from 'redux';

// Define a more specific action type with a payload property
interface FetchProductSuccessAction extends Action {
  type: 'FETCH_PRODUCT_SUCCESS';
  payload: any; // Adjust this type based on your actual payload
}

interface FetchProductFailureAction extends Action {
  type: 'FETCH_PRODUCT_FAILURE';
  payload: string; // Adjust this type based on your actual payload
}

interface FetchProductRequestAction extends Action {
  type: 'FETCH_PRODUCT_REQUEST';
}

// Union type for all possible product actions
type ProductAction = FetchProductSuccessAction | FetchProductFailureAction | FetchProductRequestAction;

interface ProductState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: [],
  loading: false,
  error: null,
};

const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'FETCH_PRODUCT_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PRODUCT_SUCCESS':
      // Now TypeScript knows that action.payload exists
      return { ...state, data: action.payload, loading: false, error: null };
    case 'FETCH_PRODUCT_FAILURE':
      // TypeScript knows that action.payload exists and is a string
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
