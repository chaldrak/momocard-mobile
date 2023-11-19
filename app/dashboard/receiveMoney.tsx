import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { styles } from "../../styles/recharge";
import Header from "../../components/Header";
import { images } from "../../constants/Images";

const ReceiveMoney = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (amount) {
      setLoading(true);
    } else {
      alert("Montant invalide !");
    }
  };

  useLayoutEffect(() => {
    if (loading) {
      const id = setTimeout(() => {
        setLoading(false);
        alert("Temps expiré !");
      }, 15000);
      return () => clearTimeout(id);
    }
  }, [loading]);

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <Spinner
          visible={true}
          textContent="Veuillez rapprocher votre carte"
          textStyle={{ color: "#fff", fontWeight: "300" }}
          overlayColor="#00000099"
        />
      )}
      <Header title="Recevoir de l'argent" />
      <View style={styles.head}>
        <Image source={images.welcome} style={styles.bgImage} />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>
          Entrez le montant à recevoir pour continuer
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoComplete="cc-number"
            placeholder="Montant du transfert"
            placeholderTextColor="lightgray"
            keyboardType={"phone-pad"}
            style={styles.inputNumber}
            maxLength={8}
            defaultValue={amount}
            onChangeText={(value) => setAmount(value)}
          />
          <TextInput
            placeholder="XOF"
            placeholderTextColor="white"
            editable={false}
            style={styles.inputCurrency}
          />
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="lightgray"
          onPress={onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Recevoir</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default ReceiveMoney;
