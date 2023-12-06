// services/userService.ts
import axios from 'axios';
import { RegisterRequest } from '../models/RegisterRequest';


export const register = async (registerRequest: RegisterRequest) => {
  try {
    const response = await axios.post('https://localhost:44352/Users/register', registerRequest);
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Rejestracja nieudana' };
  }
};
