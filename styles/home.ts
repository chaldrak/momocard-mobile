import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

// Home
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: COLORS.yellow,
  },
  imageContainer: {
    width: "80%",
    height: 200,
    textAlign: "center",
    // borderStyle: "solid",
    // borderWidth: 5,
    // borderColor: "#f00",
  },
  welcome: {
    alignItems: "center",
    marginTop: 30,
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
    backgroundColor: COLORS.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: COLORS.yellow,
    fontFamily: "Gabarito",
    fontSize: 18,
  },
});
