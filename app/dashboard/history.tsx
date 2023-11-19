import { Link, Stack, router, useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { styles } from "../../styles/history";
import Header from "../../components/Header";
import { allTransactions, transactions } from "../../constants/data";
import CardTransaction from "../../components/CardTransaction";

const History = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

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
      <Header title="Historique des transactions" />
      <View style={styles.head}>
        <View style={styles.headContainer}>
          <Text style={styles.number}>Solde</Text>
          <Text style={styles.balance}>50 000 XOF</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.transactions}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>
              Toutes les Transactions
            </Text>
          </View>

          <View style={styles.list}>
            {transactions ? (
              <FlatList
                data={allTransactions}
                renderItem={({ item }) => <CardTransaction {...item} />}
                keyExtractor={(item) => String(item.id)}
              />
            ) : (
              <Text style={{ textAlign: "center", marginTop: 50 }}>
                Aucune transaction ...
              </Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;
