import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import useAuth from "../hooks/useAuth";

const AppNav = () => {
  const { loading } = useAuth();
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      </Stack>
      <Spinner
        visible={loading}
        textContent={"Chargement..."}
        textStyle={{ color: "white", fontSize: 16 }}
        overlayColor="#00000099"
        color="white"
        size={50}
      />
    </>
  );
};

export default AppNav;
