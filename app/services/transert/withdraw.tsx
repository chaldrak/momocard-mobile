import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from "../../../styles/recharge";
import { COLORS } from "../../../constants/Colors";

const withdraw = () => {
  const [amount, setAmount] = useState("");

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", paddingHorizontal: 40 }}
    >
      <Header title="Retirer de ma carte" />
      <Text>Retirer de l'argent pour votre compte</Text>
      <Text style={{ fontFamily: "GabaritoBold" }}>MTN MOMO</Text>
      <View style={{ width: "100%", marginTop: 40 }}>
        <Text>Combien voulez-vous retirer de la carte ?</Text>
        <TextInput
          autoComplete="cc-number"
          keyboardType={"phone-pad"}
          maxLength={8}
          defaultValue={amount}
          onChangeText={(value) => setAmount(value)}
          placeholder="Saisissez le montant ici"
          style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 7,
            marginTop: 10,
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
        }}
      >
        <Text>Frais de transaction: </Text>
        <Text style={{ fontFamily: "GabaritoBold", fontSize: 20 }}>0%</Text>
      </View>
      <View style={{ width: "100%" }}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="lightgray"
          //   onPress={onSubmit}
          style={{
            backgroundColor: COLORS.yellow,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 100,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={styles.buttonText}>Retirer</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default withdraw;
