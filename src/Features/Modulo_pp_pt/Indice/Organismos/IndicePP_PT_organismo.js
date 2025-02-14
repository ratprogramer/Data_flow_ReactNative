import { View } from "react-native";
import { BotonesIndice } from "../../../../Moleculas/BotonesIndice/BotonesIndice";
import { TituloPagina } from "../../../../Moleculas/TituloPagina/TituloPagina";
import { styles } from "./styles";

export function IndicePP_PT_organismo() {
  const botones = [
    { path: "/sub_menu_pp", text: "Producto en Proceso" },
    { path: "/sub_menu_pt", text: "Producto Terminado" },
  ];

  return (
    <View style={styles.indiceContainer}>
      <TituloPagina path={"/menu"} text={"Derivado Lácteo Fermentado"} />
      <BotonesIndice botones={botones} />
    </View>
  );
}
