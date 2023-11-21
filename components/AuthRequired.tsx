import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import useAuth from "../hooks/useAuth";

const AuthRequired = ({ children }: any) => {
  const { userToken, hasPin } = useAuth();

  if (userToken === null) return <Redirect href="/auth/" />;
  else if (!hasPin) return <Redirect href="/auth/codePin" />;
  return <>{children}</>;
};

export default AuthRequired;
