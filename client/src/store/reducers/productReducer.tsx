// productReducer.js
import { AnyAction } from 'redux';

interface ProductState {
  // Define the structure of your product-related state
}

const initialState: ProductState = {
  // Product-related initial state
};

const productReducer = (state: ProductState = initialState, action: AnyAction): ProductState => {
  // Use the action parameter in your reducer logic
  switch (action.type) {
    // Handle different action types
    case 'SOME_PRODUCT_ACTION':
      // Example: return a new state based on the action
      return {
        ...state,
        someProductData: action.payload,
      };
    // Handle other action types as needed

    // Default case
    default:
      return state;
  }
};

export default productReducer;
