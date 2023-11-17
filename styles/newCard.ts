import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  bgImage: {
    opacity: 0.6,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    width: "95%",
  },
  mainTitle: {
    textAlign: "center",
    fontFamily: "Gabarito",
    fontSize: 16,
  },
  head: {
    height: "40%",
    backgroundColor: COLORS.white,
    width: "100%",
  },
  body: {
    height: "60%",
    width: "100%",
    padding: 40,
    backgroundColor: COLORS.blue,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    alignItems: "center",
  },
  description: {
    color: COLORS.white,
    fontFamily: "Gabarito",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 80,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  inputNumber: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    width: "80%",
    color: COLORS.white,
    fontFamily: "Gabarito",
    fontSize: 14,
  },
  inputIndicatif: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    width: "16.5%",
    color: COLORS.white,
    fontFamily: "Gabarito",
    fontSize: 14,
  },
  label: {
    color: COLORS.white,
    width: "20%",
  },
  input: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    width: "80%",
    color: COLORS.white,
    fontFamily: "Gabarito",
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontFamily: "GabaritoBold",
  },
  text: {
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: "80%",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.black,
    fontFamily: "Gabarito",
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  footerText: {
    fontFamily: "Gabarito",
    fontSize: 14,
    color: "lightgray",
  },
  footerLinkText: {
    fontFamily: "Gabarito",
    fontSize: 14,
    color: COLORS.yellow,
  },
});
