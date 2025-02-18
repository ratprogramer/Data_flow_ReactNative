import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const InputLst = ({
  id,
  opciones,
  register,
  onChange,
  placeHolder = true,
}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={register?.(id)?.value || ""}
        style={styles.picker}
        onValueChange={(itemValue) => {
          onChange({ target: { value: itemValue } });
          register(id).onChange({ target: { value: itemValue } });
        }}
      >
        {placeHolder && (
          <Picker.Item label="Seleccione una opción" value="" enabled={false} />
        )}
        {opciones.map((opcion, indx) => (
          <Picker.Item
            key={indx}
            label={opcion.placeHolder}
            value={opcion.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 7,
    overflow: "hidden",
  },
  picker: {
    backgroundColor: "#66cbed",
    color: "#fff",
    width: "100%",
    fontSize: 18,
    height: 48, // <= Esto es el equivalente a 2.6rem en CSS
    padding: 4,
    paddingLeft: 7,
  },
});
