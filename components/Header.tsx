import { Link, Stack } from "expo-router";
import React from "react";
import { HeaderProps } from "../types";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title }: HeaderProps) => {
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
        // headerLeft: () => {
        //   return (
        //     <Link href="/auth/signin">
        //       <AntDesign name="arrowleft" size={24} color="black" />
        //     </Link>
        //   );
        // },
      }}
    />
  );
};

export default Header;
