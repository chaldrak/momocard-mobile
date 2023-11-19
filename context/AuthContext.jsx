import React, { createContext, useEffect, useState } from "react";
import { getData, removeData, saveData } from "../components/LocaleStorage";
import axios from "../api";
import { router } from "expo-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const sendOTP = async (phoneNumber) => {
    setLoading(true);
    await axios
      .post("/otp/send-otp", { phoneNumber })
      .then((res) => {
        console.log(res);
        router.replace("/auth/confirm");
      })
      .catch((err) => {
        console.log("Error while sending otp: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = async (phoneNumber, otp) => {
    setLoading(true);
    await axios
      .post("/otp/login-otp", { phoneNumber, otp })
      .then((res) => {
        console.log(res);
        const token = res.data?.token;
        if (token) {
          setUserToken(token);
          saveData("token", token);
        }
        router.replace("/dashboard/");
      })
      .catch((err) => {
        console.log("Error while signin: ", err);
        router.replace("/auth/");
      })
      .finally(() => {
        setLoading(false);
      });
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
    <AuthContext.Provider
      value={{ login, logout, sendOTP, loading, setLoading, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
