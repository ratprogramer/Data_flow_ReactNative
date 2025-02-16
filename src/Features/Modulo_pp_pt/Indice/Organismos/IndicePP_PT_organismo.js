import { View, Text } from "react-native";
import { BotonesIndice } from "../../../../Moleculas/BotonesIndice/BotonesIndice";
import { TituloPagina } from "../../../../Moleculas/TituloPagina/TituloPagina";
import { styles } from "./styles";

export const IndicePP_PT_organismo = () => {
  const botones = [
    { path: "SubIndicePP", text: "Producto en Proceso" },
    { path: "SubMenuPT", text: "Producto Terminado" },
  ];

  return (
    <View style={styles.indiceContainer}>
      <TituloPagina path={"MenuPrincipal"} text={"Derivado Lácteo Fermentado"} />
      <BotonesIndice botones={botones} />
    </View>
  );
};