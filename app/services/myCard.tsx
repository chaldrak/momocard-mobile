import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/Colors";
import Header from "../../components/Header";
import { Link } from "expo-router";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

const MyCard = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue,
      }}
    >
      <Header title="Ma carte" bgColor={COLORS.yellow} leftUrl="/dashboard/" />
      <View
        style={{
          width: Dimensions.get("screen").width - 40,
          height: 200,
          backgroundColor: COLORS.yellow,
          borderRadius: 20,
          elevation: 5,
          borderBottomWidth: 2,
          borderRightWidth: 2,
          borderColor: COLORS.blue,
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontFamily: "GabaritoBold", width: "70%" }}
          >
            DOKPA CHALDRAK ARMAND
          </Text>
          <Entypo
            name="rss"
            size={24}
            color="black"
            style={{ transform: [{ rotate: "45deg" }] }}
          />
        </View>
        <View style={{ marginTop: 0 }}>
          <Text style={{ fontFamily: "Chakra", fontSize: 22 }}>
            <AntDesign name="caretright" size={20} color="black" /> 3945 7754
            0028 9999
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View>
            <Text>PIN : </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable onPress={toggle}>
                <Feather
                  name={visible ? "eye-off" : "eye"}
                  size={18}
                  color="black"
                />
              </Pressable>
              <Text style={{ fontFamily: "ChakraMedium" }}>
                {visible ? "45856" : "XXXXX"}
              </Text>
            </View>
          </View>
          <View>
            <Text>Date de création : </Text>
            <Text style={{ fontFamily: "ChakraMedium" }}>
              {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyCard;
