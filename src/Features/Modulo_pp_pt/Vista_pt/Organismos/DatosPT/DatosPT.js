import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

export function DatosPT() {
    const route = useRoute();
    const { nombreMuestra, lote } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.datosContainer}>
                <Text style={styles.datosText}>{nombreMuestra}</Text>
                <Text style={styles.datosText}>Lote: {lote}</Text>
            </View>
        </View>
    );
}
