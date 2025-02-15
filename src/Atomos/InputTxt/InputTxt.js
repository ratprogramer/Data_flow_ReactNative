import { TextInput, StyleSheet, useWindowDimensions } from "react-native";

export const InputTxt = ({ type, placeholder }) => {
  const { width } = useWindowDimensions();

  const isDesktop = width > 768;

  return (
    <TextInput
      style={[styles.input, isDesktop && styles.inputDesktop]}
      placeholder={placeholder}
      placeholderTextColor="#edececb9"
      keyboardType={type === "number" ? "numeric" : "default"}
      // {...register(id, validaciones)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40, // <= Aproximado a 2rem
    backgroundColor: "#66cbed",
    fontSize: 18,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 7,
    padding: 4,
  },
  inputDesktop: {
    width: "100%",
    fontSize: 18,
    backgroundColor: "#66cbed",
  },
});
