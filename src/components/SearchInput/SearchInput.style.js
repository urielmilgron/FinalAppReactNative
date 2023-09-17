import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: "center",
  },
  input: {
    width: "60%",
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  clearIcon: {
    padding: 8,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  searchIcon: {
    padding: 8,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 1,
    borderWidth: 1,
  },
});
