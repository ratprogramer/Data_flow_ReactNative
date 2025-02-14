import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function CardPT_molecula({ nombreMuestra, lote, fechaAnalisis, responsableAnalisis, id, id_PP, navRoute }) {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate(navRoute, {
            id_PP, id, nombreMuestra, lote
        });
    };

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handleClick} activeOpacity={0.7}>
            <View style={styles.dataContainer}>
                <Text style={styles.nombreMuestra}>{nombreMuestra}</Text>
                <Text>Lote: {lote}</Text>
                <Text>Fecha de análisis: {fechaAnalisis}</Text>
                <Text>Responsable de análisis: {responsableAnalisis}</Text>
            </View>
            <View style={styles.estadoContainer}>
                <Image source={require("../../../assets/estado1.png")} style={styles.estadoImg} />
            </View>
        </TouchableOpacity>
    );
}
