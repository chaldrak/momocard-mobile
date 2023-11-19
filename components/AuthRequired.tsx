import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import useAuth from "../hooks/useAuth";

const AuthRequired = ({ children }: any) => {
  const { userToken } = useAuth();

  if (userToken === null) return <Redirect href="/auth/" />;
  return <>{children}</>;
};

export default AuthRequired;
