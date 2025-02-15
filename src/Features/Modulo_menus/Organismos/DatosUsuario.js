import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export const DatosUsuario = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <View style={[styles.datos, isDesktop && styles.datosDesktop]}>
        <Text style={[styles.text, isDesktop && styles.textDesktop]}>
          Microbióloga
        </Text>
        <Text style={[styles.text, isDesktop && styles.textDesktop]}>
          Julia R. Chalarca
        </Text>
        <Text style={[styles.text, isDesktop && styles.textDesktop]}>
          <Text style={styles.bold}>Fecha: </Text>
          {año}-{mes}-{dia}
        </Text>
      </View>
      <View
        style={[styles.imgContainer, isDesktop && styles.imgContainerDesktop]}
      >
        <Image
          source={require("../../../imgs/foto-perfil.png")}
          style={styles.imgPerfil}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00a8e1",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  containerDesktop: {
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  datos: {
    flex: 1,
  },
  datosDesktop: {
    alignItems: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
  textDesktop: {
    fontSize: 24,
  },
  bold: {
    fontWeight: "bold",
  },
  imgContainer: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 70,
    overflow: "hidden",
  },
  imgContainerDesktop: {
    width: 90,
    height: 90,
  },
  imgPerfil: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
