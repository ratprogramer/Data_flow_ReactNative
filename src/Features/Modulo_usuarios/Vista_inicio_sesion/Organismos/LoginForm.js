import { View, StyleSheet, useWindowDimensions } from "react-native";
import { LabelRN } from "../../../../Atomos/Label/LabelRN";
import { InputTxt } from "../../../../Atomos/InputTxt/InputTxt";
import { InputSub } from "../../../../Atomos/InputSub/InputSub";

export const LoginForm = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768; // <= Esta es la medida de pantalla de PC

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <View
        style={[
          styles.groupContainer,
          isDesktop && styles.groupContainerDesktop,
        ]}
      >
        <LabelRN text={"Usuario"} />
        <InputTxt placeholder={"Ingrese usuario"} />
        <LabelRN text={"Contraseña"} />
        <InputTxt placeholder={"Ingrese contraseña"} />
      </View>
      <InputSub text={"Ingresar"} style={isDesktop && styles.buttonDesktop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerDesktop: {
    paddingHorizontal: 80, // Más espacio en PC
  },
  groupContainer: {
    marginBottom: 15,
    width: "100%",
  },
  groupContainerDesktop: {
    width: "60%", // Hacemos más angosto el formulario en PC
  },
  buttonDesktop: {
    paddingVertical: 12,
    paddingHorizontal: 50, // Botón más grande en PC
  },
});
