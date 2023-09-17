import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colorsPallete.secondaryColor,
    shadowColor: colorsPallete.shadowColor,
    shadowOffset: { width: 2, height: 2 },
    elevation: 4,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
