// AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signup = async (email, password) => {
    try {
      const { data: users } = await axios.get('http://localhost:5000/users');
      const userExists = users.some((user) => user.email === email);

      if (userExists) return false;

      await axios.post('http://localhost:5000/users', { email, password });
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const { data: users } = await axios.get('http://localhost:5000/users');
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setIsLoggedIn(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ signup, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
