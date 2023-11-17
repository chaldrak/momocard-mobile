import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../constants/Colors";

export const CELL_SIZE = 55;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#3557b7";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    borderWidth: 1,
    color: "#3759b8",
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    paddingVertical: 40,
    backgroundColor: "#fff",
  },
  title: {
    paddingTop: 50,
    color: "#000",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2,
    height: 158 / 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  subTitle: {
    paddingTop: 40,
    color: "#000",
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: COLORS.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: "80%",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  nextButtonText: {
    color: COLORS.white,
    fontFamily: "Gabarito",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;
