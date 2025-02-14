import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menuPrincipalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    height: "99.8%",
  },
  mainMenuContainer: {
    alignItems: "center",
  },
  menuTitulo: {
    width: 360, // <= Aproximado a 22.5rem
    fontWeight: "bold",
    fontSize: 23,
    color: "#00a8e1",
  },
});
