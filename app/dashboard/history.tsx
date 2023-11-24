import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import { styles } from "../../styles/history";
import Header from "../../components/Header";
import CardTransaction from "../../components/CardTransaction";
import { CardTransactionProps } from "../../types";
import useAuth from "../../hooks/useAuth";
import instance from "../../api";

const History = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<CardTransactionProps[]>([]);
  const { user, userToken, setLoading } = useAuth();

  useEffect(() => {
    getBalance();
    getTransactions();
  }, [userToken]);

  const getBalance = async () => {
    setLoading(true);
    try {
      const res = await instance.get(`/user/get-balance/${user?.phoneNumber}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (res.data) {
        const amount = res.data?.balance;
        setBalance(amount);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getTransactions = async () => {
    setLoading(true);
    try {
      const res = await instance.get(`/transaction/history-all/${user?._id}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (res.data) {
        const trans = res.data?.transactions;
        setTransactions(trans);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Historique des transactions" />
      <View style={styles.head}>
        <View style={styles.headContainer}>
          <Text style={styles.number}>Solde</Text>
          <Text style={styles.balance}>
            {balance.toLocaleString("fr-FR")} XOF
          </Text>
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
            {transactions.length !== 0 ? (
              <FlatList
                data={transactions}
                renderItem={({ item }) => <CardTransaction {...item} />}
                keyExtractor={(item) => String(item._id)}
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
