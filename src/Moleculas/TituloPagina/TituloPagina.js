import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const TituloPagina = ({ path, text }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(path || "MenuPrincipal");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleClick}>
        <Ionicons name="arrow-back" size={30} color="#000" />
      </Pressable>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
