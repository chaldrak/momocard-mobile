import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AuthRequired from "../../../components/AuthRequired";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { COLORS } from "../../../constants/Colors";

const _layout = () => {
  return (
    <AuthRequired>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.yellow },
        }}
      >
        <Tabs.Screen
          name="deposit"
          options={{
            title: "",
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Entypo
                  name="add-to-list"
                  size={24}
                  color={focused ? COLORS.blue : color}
                />
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    color: focused ? COLORS.blue : color,
                  }}
                >
                  Dépôt
                </Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ focused, color }) => (
              <View>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: COLORS.yellow,
                    top: -10,
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Entypo
                    name="wallet"
                    size={30}
                    color={focused ? COLORS.blue : color}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    top: -7,
                    color: focused ? COLORS.blue : color,
                  }}
                >
                  Portefeuille
                </Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="withdraw"
          options={{
            title: "",
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <AntDesign
                  name="swap"
                  size={24}
                  color={focused ? COLORS.blue : color}
                />
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    color: focused ? COLORS.blue : color,
                  }}
                >
                  Retrait
                </Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </AuthRequired>
  );
};

export default _layout;
