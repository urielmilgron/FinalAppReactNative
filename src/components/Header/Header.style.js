import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsPallete.primaryColor,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  titleHeader: {
    fontSize: 20,
    fontFamily: "RobotoMedium",
  },
});
