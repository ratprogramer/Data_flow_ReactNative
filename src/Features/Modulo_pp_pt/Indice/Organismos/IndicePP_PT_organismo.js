import { View, StyleSheet, useWindowDimensions } from "react-native";
import { BotonesIndice } from "../../../../Moleculas/BotonesIndice/BotonesIndice";
import { TituloPagina } from "../../../../Moleculas/TituloPagina/TituloPagina";

export const IndicePP_PT_organismo = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const botones = [
    { path: "SubIndicePP", text: "Producto en Proceso" },
    { path: "", text: "Producto Terminado" },
  ];

  return (
    <View style={styles.indiceContainer}>
      <TituloPagina
        path={"MenuPrincipal"}
        text={"Derivado Lácteo Fermentado"}
      />
      <View
        style={[styles.botonesIndice, isDesktop && styles.botonesIndiceDesktop]}
      >
        <BotonesIndice botones={botones} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indiceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  botonesIndice: {
    flexDirection: "column",
    alignItems: "center",
    justifySelf: "center",
    gap: 5,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "stretch",
  },
  botonesIndiceDesktop: {
    top: 260,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 40,
    width: "100%",
  },
});
