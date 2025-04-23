import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("restaurantUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("restaurantUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("restaurantUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
