import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import NfcManager from "react-native-nfc-manager";
import { Redirect } from "expo-router";
import { images } from "../../constants/Images";
import { COLORS } from "../../constants/Colors";

const NfcCheck = () => {
  const [hasNFC, setHasNFC] = useState<null | boolean>(null);

  useEffect(() => {
    const checkNfc = async () => {
      const res = await NfcManager.isSupported();
      if (res) NfcManager.start();
      setHasNFC(res);
    };
    checkNfc();
  }, []);

  if (hasNFC === null) return null;
  else if (!hasNFC) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={images.notSupported} style={styles.image} />
        </View>
        <Text style={styles.title}>Désolé !!!</Text>
        <Text style={styles.subtitle}>Votre téléphone ne supporte pas</Text>
        <Text style={styles.subtitle}>la technologie NFC</Text>
      </View>
    );
  }
  return <Redirect href="/dashboard/" />;
};

export default NfcCheck;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.yellow,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "GabaritoMedium",
    fontSize: 24,
    marginBottom: 5,
  },
  subtitle: {
    // fontFamily: "Gabarito",
    fontSize: 16,
    marginBottom: 5,
  },
  imageContainer: {
    backgroundColor: COLORS.black,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 50,
    elevation: 2,
  },
});
