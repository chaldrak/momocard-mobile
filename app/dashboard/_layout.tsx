import { View, Text } from "react-native";
import React, { useState } from "react";
import { Redirect, Tabs } from "expo-router";

const _layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) return <Redirect href="/auth/" />;
  return <Tabs />;
};

export default _layout;
