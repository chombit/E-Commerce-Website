import React, { createContext, useContext, useState, } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - in a real app, this would make an API call
    setUser({
      id: '1',
      username: email.split('@')[0],
      email
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = !!user;

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
