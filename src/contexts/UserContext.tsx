
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  role: 'Student' | 'Mentor' | 'Admin';
  image?: string;
}

interface SocialMediaLinks {
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

interface UserContextType {
  user: User | null;
  socialMediaLinks: SocialMediaLinks;
  login: (userData: User) => void;
  logout: () => void;
  updateUserImage: (image: string) => void;
  updateSocialMediaLinks: (links: SocialMediaLinks) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLinks>({});

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserImage = (image: string) => {
    if (user) {
      setUser({ ...user, image });
    }
  };

  const updateSocialMediaLinks = (links: SocialMediaLinks) => {
    setSocialMediaLinks(links);
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      socialMediaLinks, 
      login, 
      logout, 
      updateUserImage, 
      updateSocialMediaLinks 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
