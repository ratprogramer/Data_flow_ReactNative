import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { MenuPrincipalBotones } from "../Organismos/MenuPrincipalBotones";
import { DatosUsuario } from "../Organismos/DatosUsuario";

export const MenuPrincipal = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <View style={styles.menuPrincipalContainer}>
      <Text style={[styles.menuTitulo, isDesktop && styles.menuTituloDesktop]}>
        Menu Principal
      </Text>
      <MenuPrincipalBotones />
      <DatosUsuario />
    </View>
  );
};

const styles = StyleSheet.create({
  menuPrincipalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    height: "99.8%",
    width: "100%",
  },
  mainMenuContainer: {
    alignItems: "center",
  },
  menuTitulo: {
    left: 10,
    width: "100%",
    fontWeight: "bold",
    fontSize: 23,
    color: "#00a8e1",
    textAlign: "left",
  },
  menuTituloDesktop: {
    left: 0,
    fontSize: 36,
    textAlign: "center",
    backgroundColor: "#00a8e1",
    color: "#fff",
    width: "100%",
  },
});
