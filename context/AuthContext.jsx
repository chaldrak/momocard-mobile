import React, { createContext, useEffect, useState } from "react";
import { getData, removeData, saveData } from "../components/LocaleStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken("hsgyucoplqsjb");
    saveData("token", "hsgyucoplqsjb");
    setLoading(false);
  };

  const logout = () => {
    removeData("token");
    setUserToken(null);
    setLoading(false);
  };

  const isLoggedIn = async () => {
    const value = await getData("token");
    if (value) setUserToken(value);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, loading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
