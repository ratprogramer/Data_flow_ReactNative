import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export function CardPP_molecula({
  // nombreMuestra,
  // lote,
  // fechaAnalisis,
  // responsableAnalisis,
  // id,
  // navRoute,
}) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(navRoute, {
      // id,
      // nombreMuestra,
      // lote,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleClick}>
      <View style={styles.dataContainer}>
        <Text style={styles.nombreMuestra}>{nombreMuestra}</Text>
        <Text>Lote: {lote}</Text>
        <Text>Fecha de análisis: {fechaAnalisis}</Text>
        <Text>Responsable de análisis: {responsableAnalisis}</Text>
      </View>
      <View style={styles.estadoContainer}>
        <Image
          source={require("../../../../../imgs/estado1.png")}
          style={styles.estadoImg}
        />
      </View>
    </TouchableOpacity>
  );
}
