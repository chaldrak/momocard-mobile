import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    width: "95%",
  },
  head: {
    height: "15%",
    backgroundColor: COLORS.white,
    width: "100%",
    position: "relative",
  },
  headContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  number: {
    fontFamily: "GabaritoBold",
    fontSize: 24,
  },
  balance: {
    fontFamily: "Gabarito",
    fontSize: 16,
    marginTop: 5,
  },
  body: {
    height: "85%",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: COLORS.blue,
    flex: 1,
    alignItems: "center",
  },
  transactions: {
    width: "100%",
    height: "100%",
  },
  transactionsHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  transactionsTitle: {
    color: COLORS.white,
    fontFamily: "Gabarito",
  },
  transactionsLink: {
    color: COLORS.yellow,
    fontFamily: "Gabarito",
  },
  list: {
    width: "100%",
    gap: 10,
    marginTop: 10,
  },
});
