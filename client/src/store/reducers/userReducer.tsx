// userReducer.js
import { AnyAction } from 'redux';

interface UserState {
  // Define the structure of your user-related state
}

const initialState: UserState = {
  // User-related initial state
};

const userReducer = (state: UserState = initialState, action: AnyAction): UserState => {
  // Use the action parameter in your reducer logic
  switch (action.type) {
    // Handle different action types
    case 'SOME_ACTION':
      // Example: return a new state based on the action
      return {
        ...state,
        someData: action.payload,
      };
    // Handle other action types as needed

    // Default case
    default:
      return state;
  }
};

export default userReducer;
