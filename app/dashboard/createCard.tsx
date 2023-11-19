import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { styles } from "../../styles/newCard";
import { images } from "../../constants/Images";
import Header from "../../components/Header";

const CreateCard = () => {
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
            <ActivityIndicator size={"large"} color={"#fff"} />
            {/* <Spinner visible={true} /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCard;
