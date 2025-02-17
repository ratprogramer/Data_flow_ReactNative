import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 7,
    overflow: "hidden",
  },
  picker: {
    backgroundColor: "#66cbed",
    color: "#fff",
    width: "83%",
    fontSize: 18,
    height: 42, // <= Esto es el equivalente a 2.6rem en CSS
    padding: 4,
    paddingLeft: 7,
  },
});
