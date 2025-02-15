import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BotonesIndice from "../../../../../Moleculas/BotonesIndice/BotonesIndice";
import TituloPagina from "../../../../../Moleculas/TituloPagina/TituloPagina";

export function SubIndicePP_organismo() {
  const navigation = useNavigation();

  const botones = [
    { path: "IngresoProductoP", text: "Registrar producto" },
    { path: "ProductosRegistradosPP", text: "Ingresar resultado" },
  ];

  return (
    <View style={styles.container}>
      <TituloPagina
        text="Producto en proceso"
        onPress={() => navigation.navigate("MenuDerivadoLacteoFermentado")}
      />
      <BotonesIndice botones={botones} navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
