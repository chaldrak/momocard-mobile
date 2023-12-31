import React from "react";
import { Tabs } from "expo-router";
import AuthRequired from "../../components/AuthRequired";
import { Text, View } from "react-native";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/Colors";

const _layout = () => {
  return (
    <AuthRequired>
      <Tabs
        screenOptions={
          {
            // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          }
        }
      >
        <Tabs.Screen
          name="createCard"
          options={{
            title: "",
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 8,
                }}
              >
                <MaterialCommunityIcons
                  name="card-plus"
                  size={28}
                  color={focused ? COLORS.blue : color}
                />
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    color: focused ? COLORS.blue : color,
                  }}
                >
                  Créer carte
                </Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="sendMoney"
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
                  Envoi
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
          name="receiveMoney"
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
                  Réception
                </Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="history"
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
                <Octicons
                  name="history"
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
                  Historique
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
