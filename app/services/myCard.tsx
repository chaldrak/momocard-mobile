import { View, Text, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Colors";
import Header from "../../components/Header";
import { Link } from "expo-router";

const MyCard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue,
      }}
    >
      {/* <Header title="Ma carte" /> */}
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
        }}
      ></View>
      <Link
        href="/dashboard/"
        style={{
          marginTop: 50,
          fontFamily: "Gabarito",
          fontSize: 18,
          color: COLORS.white,
        }}
      >
        Retour
      </Link>
    </View>
  );
};

export default MyCard;
