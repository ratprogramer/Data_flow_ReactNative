// import React from "react";
// import { View, ScrollView, StyleSheet, Alert } from "react-native";
// import { useForm } from "react-hook-form";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import TxtGroup from "../../../../../Moleculas/InputGroup/TxtGroup/TxtGroup";
// import SelectGroup from "../../../../../Moleculas/InputGroup/SelectGroup/SelectGroup";
// import TimeGroup from "../../../../../Moleculas/InputGroup/TimeGroup/TimeGroup";
// import InputSub from "../../../../../Atomos/InputSub/InputSub";
// import { decodeToken } from "../../../../../helpers/decodeToken";

// export function FormularioIngresoPTOrganismo() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       fecha_analisis: new Date().toISOString().split("T")[0], // Valor inicial
//     },
//   });

//   const navigation = useNavigation();
//   const route = useRoute();
//   const { id } = route.params || { id: 123 };

//   const onSubmit = async (data) => {
//     const token = sessionStorage.getItem("token");
//     if (!token) {
//       Alert.alert("Error", "No se encontraron credenciales válidas en el sistema");
//       navigation.navigate("Home");
//       return;
//     }
//     const decode = decodeToken(token);
//     data["responsable_analisis"] = parseInt(decode.id);
//     data["id_producto_proceso"] = parseInt(id);
//     console.log(data);
//     navigation.navigate("Menu");
//     Alert.alert("Éxito", "Producto en proceso registrado con éxito");
//   };

//   const onError = (errors) => {
//     for (const error in errors) {
//       Alert.alert("Error", errors[error].message);
//     }
//   };

//   const opcionesPresentacion = [
//     { value: "1000", label: "1000 ml" },
//     { value: "200", label: "200 ml" },
//     { value: "200", label: "Preguntar son ml" },
//   ];

//   const opcionesMaquina = [
//     { value: "m1", label: "Máquina 1" },
//     { value: "m2", label: "Máquina 2" },
//     { value: "m3", label: "Máquina 3" },
//     { value: "m4", label: "Máquina 4" },
//   ];

//   const validaciones = { required: "Los campos con * son obligatorios" };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.formContainer}>
//         <TimeGroup
//           id={"fecha_analisis"}
//           label={"Fecha de análisis *"}
//           type={"date"}
//           register={register}
//           validaciones={validaciones}
//           defaultDate={true}
//         />
//         <TimeGroup
//           id={"fecha_env"}
//           label={"Fecha de envasado *"}
//           type={"date"}
//           register={register}
//           validaciones={validaciones}
//           defaultDate={true}
//         />
//         <TimeGroup
//           id={"fecha_vencimiento"}
//           label={"Fecha de vencimiento *"}
//           type={"date"}
//           register={register}
//           validaciones={validaciones}
//           defaultDate={true}
//         />
//         <TxtGroup
//           id={"ref"}
//           label={"Referencia *"}
//           placeholder={"Ingrese la referencia del producto terminado"}
//           register={register}
//           validaciones={validaciones}
//         />
//         <SelectGroup
//           id={"presentacion"}
//           register={register}
//           label={"Presentación del producto *"}
//           opciones={opcionesPresentacion}
//           validaciones={validaciones}
//         />
//         <TxtGroup
//           id={"lote"}
//           label={"Lote *"}
//           placeholder={"Ingrese el lote del producto terminado"}
//           register={register}
//           validaciones={validaciones}
//         />
//         <TimeGroup
//           id={"hora_empaque"}
//           label={"Hora de empaque *"}
//           register={register}
//           type={"time"}
//           validaciones={validaciones}
//         />
//         <SelectGroup
//           id={"maquina_envasadora"}
//           register={register}
//           label={"Máquina envasadora *"}
//           opciones={opcionesMaquina}
//           validaciones={validaciones}
//         />
//         <TxtGroup
//           id={"observaciones"}
//           label={"Observaciones"}
//           placeholder={"Ingrese las observaciones"}
//           register={register}
//         />
//         <InputSub text={"Ingresar"} onPress={handleSubmit(onSubmit, onError)} />
//       </View>
//     </ScrollView>
//   );
// }
