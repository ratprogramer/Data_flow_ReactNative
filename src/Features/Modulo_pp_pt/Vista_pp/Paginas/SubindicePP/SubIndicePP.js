import { View, StyleSheet, Text } from "react-native";
import { SubIndicePP_organismo } from "../../../Vista_pp/Organismos/SubIndicePP_organismo/SubIndicePP_organismo";

export const SubIndicePP = () => {
  return (
    <View style={styles.container}>
      <SubIndicePP_organismo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});