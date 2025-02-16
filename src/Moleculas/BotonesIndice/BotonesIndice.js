import { Boton } from "../../Atomos/Boton/Boton";
import { BotonContainer } from "../../Atomos/Boton/Boton";
import { View, StyleSheet } from "react-native";

export const BotonesIndice = ({ botones }) => {
  return (
    <View style={styles.botonesIndiceContainer}>
      <BotonContainer>
        {botones.map((boton, index) => (
          <Boton key={index} path={boton.path} text={boton.text} />
        ))}
      </BotonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  botonesIndiceContainer: {
    fontSize: 18,
    // gap: 5,
    // alignItems: "center",
    // flexDirection: "column",
    top: 60,
    width: "100%",
    // height: "100%",
  },
});
