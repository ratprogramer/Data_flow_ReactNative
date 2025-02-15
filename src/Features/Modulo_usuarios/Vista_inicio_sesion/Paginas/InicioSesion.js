import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { LoginForm } from "../Organismos/LoginForm";

export const InicioSesion = () => {
  const { width } = useWindowDimensions(); // <= Obtiene el ancho de la pantalla

  const isDesktop = width > 768; // <= 780 es el ancho de una pantalla de escritorio

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#001d2e", "#0072b1"]}
        start={[0, 0]}
        end={[0, 1]}
        style={[styles.gradient, isDesktop && styles.gradientDesktop]}
      >
        <Text style={[styles.title, isDesktop && styles.titleDesktop]}>
          Bienvenido
        </Text>
        <LoginForm />
        <Image
          style={[styles.logo, isDesktop && styles.logoDesktop]}
          source={require("../../../../imgs/LogoNormal.png")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  gradientDesktop: {
    paddingHorizontal: 80, // <= Tocó poner más espacio para pantallas grandes
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  titleDesktop: {
    fontSize: 64, // Aumentamos tamaño en PC
  },
  logo: {
    width: 60,
    height: 60,
  },
  logoDesktop: {
    width: 100,
    height: 100, // Logo más grande en PC
  },
});
