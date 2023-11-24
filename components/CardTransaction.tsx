import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../styles/dashboard";
import { AntDesign } from "@expo/vector-icons";
import { CardTransactionProps } from "../types";

const CardTransaction = ({
  amount,
  createdAt,
  payeeNote,
  type,
}: CardTransactionProps) => {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.imageCard,
          type === "credit" ? styles.creditBgColor : styles.debitBgColor,
        ]}
      >
        <AntDesign
          name={type === "credit" ? "caretup" : "caretdown"}
          size={20}
          color={type === "credit" ? "green" : "red"}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.date}>
            {new Date(createdAt).toLocaleString("fr-FR")}
          </Text>
          <Text
            style={[
              styles.amount,
              type === "credit" ? styles.debitColor : styles.creditColor,
            ]}
          >
            {`${type === "credit" ? "+" : "-"} ${amount}`} XOF
          </Text>
        </View>
        <Text style={styles.description}>{payeeNote}</Text>
      </View>
    </View>
  );
};

export default CardTransaction;
