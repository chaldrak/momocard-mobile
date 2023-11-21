import { Link, Stack } from "expo-router";
import React from "react";
import { HeaderProps } from "../types";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/Colors";

const Header = ({ title, bgColor = COLORS.white, leftUrl }: HeaderProps) => {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerTitle: () => (
          <View>
            <Text
              style={{
                fontFamily: "Gabarito",
                fontSize: 16,
              }}
            >
              {title}
            </Text>
          </View>
        ),
        headerBackVisible: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: bgColor },
        headerLeft: () => {
          if (!leftUrl) return null;
          return (
            <Link href={leftUrl}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Link>
          );
        },
      }}
    />
  );
};

export default Header;
