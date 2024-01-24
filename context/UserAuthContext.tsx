import React, { createContext, useContext, ReactNode, useState } from 'react';
import { User } from '../types/user';

interface UserContextType {
  user: User | null;
  updateUser: (userData: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
