// UserService.ts

import axios, { AxiosError } from 'axios';
import { User } from '../models/User';
import { AuthenticateRequest } from '../models/AuthenticateRequest';

export class UserService {
  static async authenticate(request: AuthenticateRequest): Promise<User | null> {
    try {
      const response = await axios.post<User>('https://localhost:44352/Users/authenticate', request);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getUserByToken(token: string): Promise<User | null> {
    try {
      const response = await axios.get<User>('https://localhost:44352/Users/GetUserByToken', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);

      // Explicitly type the error object as AxiosError
      const axiosError = error as AxiosError;

      // Check if the error is due to token expiration
      if (axiosError.response && axiosError.response.status === 401) {
        // Token expired, handle logout
        window.localStorage.removeItem('jwt');
        return null;
      }

      return null;
    }
  }
}
