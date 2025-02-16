import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Pressable, Text, View, useWindowDimensions } from "react-native";

export const Boton = ({ path, text }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const handleNavigate = () => {
    navigation.navigate(path);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btnAtomo,
        isDesktop ? styles.btnDesktop : styles.btnMobile,
        pressed && styles.btnAtomoHover,
      ]}
      path={path}
      onPress={handleNavigate}
    >
      <Text style={[styles.text, isDesktop && styles.textDesktop]}>{text}</Text>
    </Pressable>
  );
};

export const BotonContainer = ({ children }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      {children}
    </View>
  );
};
