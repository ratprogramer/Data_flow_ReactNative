import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#00a8e1",

    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  datos: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  imgContainer: {
    width: 70,
    height: 70,
    
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 70,

    overflow: "hidden",
  },
  imgPerfil: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  menuContainer: {
    height: "64%",
    
    flexDirection: "column",
    alignItems: "center",

    gap: "6%",
  },
});
