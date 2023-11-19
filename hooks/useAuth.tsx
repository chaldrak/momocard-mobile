import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../types";

const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export default useAuth;
