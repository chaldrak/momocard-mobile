import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { clearData, getData, saveData } from "../utils/localeStorage";
import axios from "../api";
import { router } from "expo-router";
import { TOKEN_EXP_TIME } from "../constants/config";
import { AuthContextType, UserType } from "../types";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [hasPin, setHasPin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState<UserType>();

  // Get the user infos
  const getUser = useCallback(async () => {
    setLoading(true);
    await axios
      .get("/user/auth/" + phoneNumber, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        if (res.data?.success) {
          setUser(res.data?.user);
        }
      })
      .catch((err) => {
        console.log("Error while getting user infos : ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [phoneNumber, userToken]);

  useEffect(() => {
    if (userToken) getUser();
  }, [userToken]);

  // Send OTP code or login
  const sendOTP = async (phoneNumber: string) => {
    setLoading(true);
    await axios
      .post("/otp/send-otp", { phoneNumber })
      .then((res) => {
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
  const login = async (phoneNumber: string, otp: string) => {
    setLoading(true);
    await axios
      .post("/otp/login-otp", { phoneNumber, otp })
      .then((res) => {
        if (res.data) {
          const token = res.data?.token;
          if (token) {
            setUserToken(token);
            saveData("token", token);
            saveData("logged_in_at", String(new Date().getTime()));
          }
          setHasPin(res.data?.user?.hasPin);
          saveData("hasPin", String(res.data?.user?.hasPin));
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
    const bool = await getData("hasPin");
    if (value) setUserToken(value);
    if (bool === "true") setHasPin(true);
    else setHasPin(false);
  };

  // Get user phone number
  const getPhoneNumber = async () => {
    const phoneNumber = await getData("phoneNumber");
    if (phoneNumber) setPhoneNumber(phoneNumber);
  };

  const verifyToken = async () => {
    const last_login_date = await getData("logged_in_at");
    if (last_login_date) {
      const exp = Number(last_login_date) + TOKEN_EXP_TIME;
      const tokenExpiresIn = new Date(exp);
      if (new Date() > tokenExpiresIn) {
        logout();
      }
    }
  };

  useEffect(() => {
    isLoggedIn();
    getPhoneNumber();
  }, []);

  useEffect(() => {
    if (userToken) {
      const interval = setInterval(verifyToken, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [userToken]);

  // Set Code PIN
  const setPin = async (phoneNumber: string, userPin: string) => {
    setLoading(true);
    await axios
      .patch(
        "/user/auth/set-pin",
        { phoneNumber, userPin },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      )
      .then((res) => {
        if (res.data && res.data?.success) {
          console.log(res);
          setHasPin(true);
          saveData("hasPin", "true");
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
        user,
        phoneNumber,
        setPhoneNumber,
        setLoading,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
