import { View, Text, TextInput } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from "../../../styles/recharge";
import { COLORS } from "../../../constants/Colors";
import useAuth from "../../../hooks/useAuth";
import instance from "../../../api";
import { router } from "expo-router";

const deposit = () => {
  const [amount, setAmount] = useState("");
  const { userToken, setLoading, user } = useAuth();

  const onSubmit = useCallback(async () => {
    if (amount) {
      setLoading(true);
      try {
        const res = await instance.post(
          "/transaction/refill",
          {
            user: user?._id,
            amount: amount,
            partyIdType: "MSSDN",
            partyId: user?.phoneNumber,
            payerMessage: "Recharge de ma carte",
            payeeNote: "Recharge de ma carte",
            transactionType: "refill",
          },
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        if (res.data && res.data?.success) {
          setAmount("");
          alert("Transfert effectué avec succès !");
          router.replace("/dashboard/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Montant invalide !");
    }
  }, [amount]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", paddingHorizontal: 30 }}
    >
      <Header title="Recharger ma carte" bgColor={COLORS.yellow} />
      <Text>Recharger votre carte depuis votre compte</Text>
      <Text style={{ fontFamily: "GabaritoBold" }}>MTN MOMO</Text>
      <View style={{ width: "100%", marginTop: 40 }}>
        <Text>Combien voulez-vous recharger ?</Text>
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
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default deposit;
