import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // En móviles, los botones están en columna
    // alignItems: "center",
    gap: 10,
  },
  containerDesktop: {
    bottom: 250,
    left: 180,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 40,
    Width: "100%", // Ajuste para que solo entren 4 columnas (200px por botón + gap)
    Height: "100%",
  },

  btnAtomo: {
    backgroundColor: "#00a8e1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
  },
  btnMobile: {
    width: "100%", // En móviles ocupa casi todo el ancho
    height: 50,
  },
  btnDesktop: {
    top: 150,
    width: "40%",
    height: "30%",
  },
  btnAtomoHover: {
    backgroundColor: "#005072",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDesktop: {
    fontSize: 30,
  },
});
