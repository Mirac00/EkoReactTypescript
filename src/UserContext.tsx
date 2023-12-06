import React from 'react';
import { User } from './models/User';

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = React.createContext<UserContextProps | undefined>(undefined);
