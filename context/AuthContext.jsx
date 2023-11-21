import React, { createContext, useEffect, useState } from "react";
import {
  clearData,
  getData,
  removeData,
  saveData,
} from "../utils/localeStorage";
import axios from "../api";
import { router } from "expo-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [hasPin, setHasPin] = useState(false);

  // Send OTP code or login
  const sendOTP = async (phoneNumber) => {
    setLoading(true);
    await axios
      .post("/otp/send-otp", { phoneNumber })
      .then((res) => {
        console.log(res);
        if (res.data?.status === 200) {
          router.replace("/auth/confirm");
        }
      })
      .catch((err) => {
        console.log("Error while sending otp: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Enter code sent to log in
  const login = async (phoneNumber, otp) => {
    setLoading(true);
    await axios
      .post("/otp/login-otp", { phoneNumber, otp })
      .then((res) => {
        if (res.data) {
          const token = res.data?.token;
          if (token) {
            setUserToken(token);
            saveData("token", token);
            setHasPin(res.data?.user?.hasPin);
          }

          router.replace("/dashboard/");
        }
      })
      .catch((err) => {
        console.log("Error while signin: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Function to log out
  const logout = () => {
    clearData();
    setUserToken(null);
    setLoading(false);
  };

  // Verify if user is logged in
  const isLoggedIn = async () => {
    const value = await getData("token");
    if (value) setUserToken(value);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  // Set Code PIN
  const setPin = async (userId, userPin) => {
    setLoading(true);
    await axios
      .patch("/user/auth/set-pin", { userId, userPin })
      .then((res) => {
        if (res.data && res.data?.success) {
          console.log(res);
          setHasPin(true);
          router.replace("/dashboard/");
        }
      })
      .catch((err) => {
        console.log("Error while creating a code PIN ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        sendOTP,
        loading,
        hasPin,
        setPin,
        setLoading,
        userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
