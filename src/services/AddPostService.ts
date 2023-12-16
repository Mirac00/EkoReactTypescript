import axios from 'axios';
import { AddPostRequest } from '../models/AddPostModel';

const API_URL = 'https://localhost:44352/Posts';

export const AddPostService = {
  createPost: async (data: AddPostRequest, token: string): Promise<void> => {
    await axios.post(API_URL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};