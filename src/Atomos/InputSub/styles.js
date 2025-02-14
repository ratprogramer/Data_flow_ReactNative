import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    backgroundColor: "#1E3148",
    width: "84%",
    fontSize: 18,
    padding: 4,
    height: 40, // <=Aproximado a 2.5rem
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 3, // <= Solo para Android
  },
  text: {
    color: "#FFF",
    fontSize: 18,
  },
});
