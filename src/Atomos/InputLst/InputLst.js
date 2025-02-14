// import { View, Picker } from "react-native";
// import { styles } from "./styles";

// export function InputLst({
//   id,
//   opciones,
//   register,
//   onChange,
//   placeHolder = true,
// }) {
//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={register(id)?.value || ""}
//         style={styles.picker}
//         onValueChange={(itemValue) => {
//           onChange({ target: { value: itemValue } });
//           register(id).onChange({ target: { value: itemValue } });
//         }}
//       >
//         {placeHolder && (
//           <Picker.Item label="Seleccione una opción" value="" enabled={false} />
//         )}
//         {opciones.map((opcion, indx) => (
//           <Picker.Item
//             key={indx}
//             label={opcion.placeHolder}
//             value={opcion.value}
//           />
//         ))}
//       </Picker>
//     </View>
//   );
// }
