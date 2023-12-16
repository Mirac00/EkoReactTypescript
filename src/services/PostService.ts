import axios from 'axios';
import { Post } from '../models/PostModel';

const API_URL = 'https://localhost:44352/Posts';

export const PostService = {
  getAllPosts: async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(API_URL);
    return response.data;
  },
};
