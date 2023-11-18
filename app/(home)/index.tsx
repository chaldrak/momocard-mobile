import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { styles } from "../../styles/home";
import { images } from "../../constants/Images";

const Home = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.welcome} />
        <View style={styles.welcome}>
          <Text style={styles.text}>Bienvenue dans</Text>
          <Text style={styles.title}>MomoCard</Text>
        </View>
      </View>
      <Link href="/nfcCheck" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Démarrer</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Home;
