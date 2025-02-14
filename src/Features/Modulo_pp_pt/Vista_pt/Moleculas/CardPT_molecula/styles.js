import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "3%",
        width: "85%",
        height: 92,
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: "2%",
        paddingRight: "1.5%",
        paddingTop: "0.5%",
        paddingBottom: "0.5%",
        borderRadius: 10,
        backgroundColor: "#00a8e1",
        color: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.75,
        shadowRadius: 6,
        elevation: 5, // Para Android
    },
    cardContainerActive: {
        backgroundColor: "#01a3da",
        transform: [{ scale: 0.97 }],
    },
    estadoContainer: {
        width: 50,
    },
    estadoImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    nombreMuestra: {
        fontSize: 18,
        color: "rgb(245, 246, 248)",
        fontWeight: "200",
    },
    dataContainer: {
        lineHeight: 14,
    },
});
