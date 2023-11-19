import { Link, Stack, router, useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { styles } from "../../styles/dashboard";
import { COLORS } from "../../constants/Colors";
import { transactions } from "../../constants/data";
import CardTransaction from "../../components/CardTransaction";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

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
            <Octicons
              name="light-bulb"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <View style={styles.head}>
        <View style={styles.headContainer}>
          <Pressable onPress={logout}>
            <Text style={{ color: "red" }}>Logout</Text>
          </Pressable>
          <Text style={styles.number}>97 07 52 96</Text>
          <Text style={styles.balance}>50 000 XOF</Text>
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
            {transactions ? (
              <FlatList
                data={transactions}
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

export default Dashboard;
