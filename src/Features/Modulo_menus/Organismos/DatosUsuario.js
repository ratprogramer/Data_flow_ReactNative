import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function DatosUsuario() {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Mes inicia en 0, por lo que sumamos 1
  const dia = String(fecha.getDate()).padStart(2, "0");

  return (
    <View style={styles.container}>
      <View style={styles.datos}>
        <Text style={styles.text}>Microbióloga</Text>
        <Text style={styles.text}>Julia R. Chalarca</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Fecha: </Text>
          {año}-{mes}-{dia}
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../imgs/foto-perfil.png")}
          style={styles.imgPerfil}
        />
      </View>
    </View>
  );
}
