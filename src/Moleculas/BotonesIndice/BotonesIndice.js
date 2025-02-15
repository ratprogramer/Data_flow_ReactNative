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
    gap: 5,
    alignItems: "center",
    flexDirection: "column",
    top: 10,
    width: "100%",
    height: "100%",
  },
});
