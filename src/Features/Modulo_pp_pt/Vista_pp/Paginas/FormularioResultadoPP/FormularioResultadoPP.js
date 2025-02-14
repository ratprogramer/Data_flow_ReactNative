import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TituloPagina from "../../../../../Moleculas/TituloPagina/TituloPagina";
import DatosPP from "../../Organismos/DatosPP/DatosPP";
import FormularioResultadoPP_organismo from "../../Organismos/FormularioResultadoPP_organismo/FormularioResultadoPP_organismo";

export function FormularioResultadoPP() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TituloPagina 
                text="Resultado" 
                onPress={() => navigation.navigate("ProductosRegistradosPP")} 
            />
            <DatosPP />
            <FormularioResultadoPP_organismo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
});
