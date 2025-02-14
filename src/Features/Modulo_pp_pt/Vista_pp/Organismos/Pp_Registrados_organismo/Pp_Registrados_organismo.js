// import { useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import { CardPP_molecula } from "../../Moleculas/CardPP_molecula/CardPP_molecula";
// import { useGetFetch } from "../../../../../helpers/useGetFetch";

// export function Pp_Registrados_organismo() {
//     const [productos, setProductos] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await useGetFetch("/producto/producto_proceso");
//                 setProductos(response.result || []);
//             } catch (error) {
//                 console.error("Error al obtener los datos:", error);
//             }
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         console.log(productos);
//     }, [productos]);

//     const formatFecha = (fechaISO) => {
//         const fecha = new Date(fechaISO);
//         return fecha.toLocaleDateString();
//     };

//     return (
//         <View style={styles.container}>
//             {productos.length === 0 ? (
//                 <Text style={styles.emptyText}>No hay productos en proceso registrados</Text>
//             ) : (
//                 <FlatList
//                     data={productos}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => (
//                         <CardPP_molecula
//                             navRoute={"/ingreso_resultado_producto_p"}
//                             nombreMuestra={item.nombre_pp}
//                             lote={item.lote}
//                             fechaAnalisis={formatFecha(item.fecha_analisis)}
//                             responsableAnalisis={item.responsable_analisis}
//                             id={item.id}
//                         />
//                     )}
//                 />
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 16,
//         backgroundColor: "#fff",
//     },
//     emptyText: {
//         fontSize: 18,
//         color: "#333",
//         textAlign: "center",
//     },
// });
