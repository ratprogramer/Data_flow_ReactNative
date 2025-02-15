import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

export const Boton = ({ path, text }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const handleNavigate = () => {
    navigation.navigate(path);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnAtomo,
        isDesktop ? styles.btnDesktop : styles.btnMobile, // Aplica estilos según el tamaño de la pantalla
        pressed && styles.btnAtomoHover,
      ]}
      // path={path}
      onPress={handleNavigate}
    >
      <Text style={[styles.text, isDesktop && styles.textDesktop]}>{text}</Text>
    </Pressable>
  );
};

export const BotonContainer = ({ children }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // En móviles, los botones están en columna
    // alignItems: "center",
    gap: 10,
  },
  containerDesktop: {
    bottom: 250,
    left: 180,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 40,
    Width: "100%", // Ajuste para que solo entren 4 columnas (200px por botón + gap)
    Height: "100%",
  },

  btnAtomo: {
    backgroundColor: "#00a8e1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
  },
  btnMobile: {
    width: "100%", // En móviles ocupa casi todo el ancho
    height: 50,
  },
  btnDesktop: {
    top: 150,
    width: "40%", // En escritorio tiene tamaño fijo para parecer tarjetas
    height: "30%",
  },
  btnAtomoHover: {
    backgroundColor: "#005072",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDesktop: {
    fontSize: 30,
  },
});
