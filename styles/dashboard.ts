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
    height: "30%",
    backgroundColor: COLORS.yellow,
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
    fontSize: 28,
  },
  balance: {
    fontFamily: "Gabarito",
    fontSize: 20,
    marginTop: 5,
  },
  recharge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 10,
  },
  rechargeText: {
    fontFamily: "Gabarito",
    fontSize: 12,
  },
  navbar: {
    width: "80%",
    height: 80,
    backgroundColor: COLORS.white,
    borderColor: "black",
    borderRadius: 10,
    position: "absolute",
    top: -50,
    left: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  navButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
  },
  icon: {
    backgroundColor: COLORS.yellow,
    padding: 7,
    borderRadius: 5,
  },
  navButtonText: {
    fontFamily: "Gabarito",
  },
  body: {
    height: "70%",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 40,
    backgroundColor: COLORS.blue,
    flex: 1,
    alignItems: "center",
  },
  transactions: {
    width: "100%",
    marginTop: 10,
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
  card: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.gray,
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    borderRadius: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
  imageCard: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { width: "100%" },
  contentTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "83%",
    marginBottom: 5,
  },
  date: {
    fontFamily: "Gabarito",
    fontSize: 12,
  },
  amount: {
    fontFamily: "Gabarito",
    fontSize: 12,
  },
  description: {
    fontFamily: "GabaritoMedium",
    fontSize: 15,
    textTransform: "uppercase",
  },
  debitColor: {
    color: "green",
  },
  creditColor: {
    color: "red",
  },
  creditBgColor: {
    backgroundColor: "#00FF0022",
    borderColor: "#00FF0044",
  },
  debitBgColor: {
    backgroundColor: "#FF000022",
    borderColor: "#FF000044",
  },
});
