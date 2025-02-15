import { Text, StyleSheet, useWindowDimensions } from "react-native";

export const LabelRN = ({ text }) => {
  const { width } = useWindowDimensions();

  const isDesktop = width > 768;

  return <Text style={[styles.label, isDesktop && styles.labelDesktop]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    width: "100%",
    marginTop: 10,
  },
  labelDesktop: {
    fontSize: 28,
  },
});