import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TituloPagina from "../../../../../Moleculas/TituloPagina/TituloPagina";
import FormularioIngresoPP_organismo from "../../Organismos/FormularioIngresoPP_organismo/FormularioIngresoPP_organismo";

export function FormularioRegistroPP_pagina() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TituloPagina 
                text="Registro" 
                onPress={() => navigation.navigate("SubMenuPP")} 
            />
            <FormularioIngresoPP_organismo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
});
