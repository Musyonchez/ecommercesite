// userActions.js
import { User } from '../types'; // Replace 'User' with the actual type of your user object

export const fetchUserRequest = () => ({ type: 'FETCH_USER_REQUEST' });
export const fetchUserSuccess = (user: User) => ({ type: 'FETCH_USER_SUCCESS', payload: user });
export const fetchUserFailure = (error: string) => ({ type: 'FETCH_USER_FAILURE', payload: error });
