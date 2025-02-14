import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "85%",
    height: 92,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    gap: 10,

    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,

    backgroundColor: "#00a8e1",
    paddingHorizontal: 10,
    paddingVertical: 5,

    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.75,

    elevation: 5,
  },
  dataContainer: {
    flex: 1,
  },
  nombreMuestra: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  estadoContainer: {
    width: 50,
    height: 50,
  },
  estadoImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
