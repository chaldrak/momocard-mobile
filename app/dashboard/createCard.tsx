import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "../../styles/newCard";
import { images } from "../../constants/Images";
import Header from "../../components/Header";
import { COLORS } from "../../constants/Colors";
import nfcManager, { Ndef, NfcTech } from "react-native-nfc-manager";
import useAuth from "../../hooks/useAuth";

const CreateCard = () => {
  const { user } = useAuth();

  useEffect(() => {
    nfcManager.start();
  }, []);

  async function writeNdef({ type, value }: any) {
    let result = false;

    try {
      // STEP 1
      await nfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord(user?._id as string)]);

      if (bytes) {
        await nfcManager.ndefHandler // STEP 2
          .writeNdefMessage(bytes); // STEP 3
        result = true;
      }
    } catch (ex) {
      console.warn(ex);
    } finally {
      // STEP 4
      nfcManager.cancelTechnologyRequest();
    }

    return result;
  }

  async function readMifare() {
    let mifarePages: any[] = [];

    try {
      // STEP 1
      let reqMifare = await nfcManager.requestTechnology(
        NfcTech.MifareUltralight
      );

      const readLength = 60;
      const mifarePagesRead = await Promise.all(
        [...Array(readLength).keys()].map(async (_, i) => {
          const pages = await nfcManager.mifareUltralightHandlerAndroid // STEP 2
            .mifareUltralightReadPages(i * 4); // STEP 3
          mifarePages.push(pages);
        })
      );
    } catch (ex) {
      console.warn(ex);
    } finally {
      // STEP 4
      nfcManager.cancelTechnologyRequest();
    }

    return mifarePages;
  }

  const writeData = async () => {
    console.log(writeNdef({}));
  };

  const readData = async () => {
    console.log(readMifare());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Créez votre carte" />

      <View style={styles.head}>
        <Image source={images.welcome} style={styles.bgImage} />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>
          Veuillez scanner votre carte MoMo
        </Text>
        <View style={styles.inputContainer}>
          <View
            style={{
              flex: 1,
              marginTop: 20,
            }}
          >
            {/* <ActivityIndicator size={"large"} color={"#fff"} /> */}
            {/* <Spinner visible={true} /> */}
            <Pressable
              style={{
                padding: 4,
                backgroundColor: COLORS.yellow,
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onPress={writeData}
            >
              <Text style={{ textAlign: "center" }}>Write Data</Text>
            </Pressable>
            <Pressable
              style={{
                padding: 4,
                backgroundColor: COLORS.white,
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
              }}
              onPress={readData}
            >
              <Text style={{ textAlign: "center" }}>Read Data</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCard;
