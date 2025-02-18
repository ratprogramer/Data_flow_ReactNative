import { useEffect, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export function InputDate({ id, register, validaciones, defaultDate }) {
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (defaultDate) {
      const today = new Date().toISOString().split("T")[0]; // <= Esta variable devuelve la fecha en el formato "Año-Mes-Día"
      setSelectedDate(today);
      register(id, validaciones).onChange({ target: { value: today } });
    }
  }, [defaultDate]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={selectedDate}
        onChangeText={(text) => {
          setSelectedDate(text);
          register(id, validaciones).onChange({ target: { value: text } });
        }}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#66cbed",
    color: "#fff",
    width: "80%",
    fontSize: 18,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 7,
    padding: 4,
    paddingLeft: 7,
  },
});
