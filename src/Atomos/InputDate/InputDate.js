import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

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
