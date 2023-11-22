import { View, Text, TextInput } from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableHighlight } from "react-native-gesture-handler";
import Header from "../../components/Header";
import { COLORS } from "../../constants/Colors";
import { styles } from "../../styles/recharge";
import useAuth from "../../hooks/useAuth";

const codePin = () => {
  const [codePin, setCodePin] = useState("");
  const [codePinConfirm, setCodePinConfirm] = useState("");
  const { setPin, phoneNumber } = useAuth();

  const onSubmit = async () => {
    if (onlyNumbers() && accuratePin) {
      if (phoneNumber) {
        setPin(phoneNumber, codePin);
      } else {
        console.error("User not found !");
      }
    } else {
      alert("Code invalide !");
    }
  };

  const onlyNumbers = () => {
    const regex = /^\d{5}$/;

    return regex.test(codePin);
  };

  const accuratePin = useMemo(() => {
    return codePin === codePinConfirm;
  }, [codePin, codePinConfirm]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", paddingHorizontal: 30 }}
    >
      <Header title="Coniguration Code PIN" bgColor={COLORS.yellow} />
      <Text>Veuillez choisir un code à 5 chiffres</Text>
      <Text>avant de continuer</Text>
      <View style={{ width: "100%", marginTop: 40 }}>
        <Text>Code PIN</Text>
        <TextInput
          autoComplete="cc-number"
          keyboardType={"phone-pad"}
          maxLength={5}
          defaultValue={codePin}
          onChangeText={(value) => setCodePin(value)}
          placeholder="Votre code ici"
          style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 7,
            marginTop: 10,
            borderRadius: 50,
          }}
        />
      </View>
      <View style={{ width: "100%", marginTop: 20 }}>
        <Text>Confirmation Code PIN</Text>
        <TextInput
          autoComplete="cc-number"
          keyboardType={"phone-pad"}
          maxLength={5}
          defaultValue={codePinConfirm}
          onChangeText={(value) => setCodePinConfirm(value)}
          placeholder="Confirmez votre code"
          style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 7,
            marginTop: 10,
            borderRadius: 50,
          }}
        />
      </View>
      <View style={{ width: "100%" }}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="lightgray"
          onPress={onSubmit}
          style={{
            backgroundColor: COLORS.yellow,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 100,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default codePin;
