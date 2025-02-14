import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

export function DatosPP() {
  const route = useRoute();
  const { nombreMuestra, lote } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.datosContainer}>
        <Text style={styles.text}>{nombreMuestra}</Text>
        <Text style={styles.text}>Lote: {lote}</Text>
      </View>
    </View>
  );
}
