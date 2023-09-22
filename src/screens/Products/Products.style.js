import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsContainer: {
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    height: 60,
  },
  touchableItem: {
    backgroundColor: colorsPallete.secondaryColor,
    height: 40,
    width: "90%",
  },
  textItem: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    textAlignVertical: "center",
  },
});
