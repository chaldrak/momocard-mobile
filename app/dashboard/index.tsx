import { Link, Stack, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "../../styles/dashboard";
import { COLORS } from "../../constants/Colors";
import CardTransaction from "../../components/CardTransaction";
import useAuth from "../../hooks/useAuth";
import instance from "../../api";
import { CardTransactionProps } from "../../types";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<CardTransactionProps[]>([]);
  const { logout, user, userToken, setLoading } = useAuth();

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
      const res = await instance.get(`/transaction/history-min/${user?._id}`, {
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
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.yellow },
          headerLeft: () => (
            <MaterialIcons
              name="segment"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={logout}
              style={{ marginRight: 10, marginTop: 10 }}
            >
              <Text
                style={{ color: "red", fontFamily: "Gabarito", fontSize: 16 }}
              >
                Déconnexion
              </Text>
            </Pressable>
          ),
        }}
      />
      <View style={styles.head}>
        <View style={styles.headContainer}>
          <Text style={styles.number}>{user?.phoneNumber}</Text>
          <Text style={styles.balance}>
            {balance.toLocaleString("fr-FR")} XOF
          </Text>
          <Pressable
            style={styles.recharge}
            onPress={() => router.replace("/services/transert/deposit")}
          >
            <Text style={styles.rechargeText}>Recharger</Text>
            <Entypo name="cycle" size={12} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.navbar}>
          <Pressable onPress={() => router.replace("/services/myCard")}>
            <View style={styles.navButton}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="credit-card-outline"
                  size={20}
                  color="black"
                />
              </View>
              <Text style={styles.navButtonText}>Ma carte</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => router.replace("/dashboard/sendMoney")}>
            <View style={styles.navButton}>
              <View style={styles.icon}>
                <Entypo name="add-to-list" size={20} color="black" />
              </View>
              <Text style={styles.navButtonText}>Envoyer</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => router.replace("/dashboard/receiveMoney")}>
            <View style={styles.navButton}>
              <View style={styles.icon}>
                <AntDesign name="swap" size={20} color="black" />
              </View>
              <Text style={styles.navButtonText}>Recevoir</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.transactions}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Transactions récentes</Text>
            <Link href="/dashboard/history" style={styles.transactionsLink}>
              Voir plus
            </Link>
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

export default Dashboard;
