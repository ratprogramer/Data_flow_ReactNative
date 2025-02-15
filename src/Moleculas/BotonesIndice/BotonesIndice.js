import { Boton } from "../../Atomos/Boton/Boton";
import { View, StyleSheet } from "react-native";

export const BotonesIndice = ({ botones }) => {
  return (
    <View style={styles.botonesIndiceContainer}>
      {botones.map((boton, index) => (
        <Boton key={index} text={boton.text} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  botonesIndiceContainer: {
    gap: "3%", // Espaciado entre elementos
    alignItems: "center", // Centra los elementos horizontalmente
    flexDirection: "column", // Coloca los elementos en columna
  },
});
