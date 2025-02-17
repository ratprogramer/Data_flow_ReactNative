import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BotonesIndice } from "../../../../../Moleculas/BotonesIndice/BotonesIndice";
import { TituloPagina } from "../../../../../Moleculas/TituloPagina/TituloPagina";

export const SubIndicePP_organismo = () => {
  const navigation = useNavigation();

  // const botones = [{ path: "", text: "Registrar producto" }];
  const botones = [
    { path: "FormularioRegistroPP", text: "Registrar producto" },
    { path: "", text: "Ingresar resultado" },
  ];
  return (
    <View style={styles.container}>
      <TituloPagina
        path={"IndicePP_PT"}
        text="Productos en Proceso"
        styles={styles.titulo}
      />
      <BotonesIndice botones={botones} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    alignSelf: "stretch",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
