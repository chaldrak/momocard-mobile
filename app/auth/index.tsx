import { Link, Stack, router, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { styles } from "../../styles/signin";
import useAuth from "../../hooks/useAuth";
import { MTN_PREFIX } from "../../constants/config";
import axios from "../../api";
import { saveData } from "../../utils/localeStorage";

const Signin = () => {
  const [number, setnumber] = useState("");
  const { sendOTP } = useAuth();

  const onSubmit = async () => {
    if (getPrefix() && onlyNumbers()) {
      sendOTP(number);
      await saveData("phoneNumber", number);
      router.replace("/auth/confirm");
    } else {
      alert("Numéro invalide !");
    }
  };

  const getPrefix = () => {
    if (number) {
      const prefix = Number(number.slice(0, 2));
      return MTN_PREFIX.includes(prefix);
    }
    return false;
  };

  const onlyNumbers = () => {
    const regex = /^\d{8}$/;

    return regex.test(number);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View>
              <Text style={styles.mainTitle}>Content de vous revoir !</Text>
            </View>
          ),
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/login.jpg")}
          style={styles.bgImage}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>
          Connectez-vous avec votre numéro de téléphone
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="+ 229"
            placeholderTextColor="white"
            editable={false}
            style={styles.inputIndicatif}
          />
          <TextInput
            autoComplete="cc-number"
            placeholder="Votre numéro ici"
            placeholderTextColor="lightgray"
            keyboardType={"phone-pad"}
            style={styles.inputNumber}
            maxLength={8}
            defaultValue={number}
            onChangeText={(value) => setnumber(value)}
          />
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="lightgray"
          onPress={onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
