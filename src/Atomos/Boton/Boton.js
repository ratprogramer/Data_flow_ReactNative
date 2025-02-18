import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, useWindowDimensions, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
  containerDesktop: {
    bottom: 200,
    left: 180,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    gap: 10,
    Width: "100%",
    Height: "100%",
  },

  btnAtomo: {
    backgroundColor: "#00a8e1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
  },
  btnMobile: {
    width: "100%",
    height: 50,
  },
  btnDesktop: {
    width: "40%",
    height: "50%",
  },
  btnAtomoHover: {
    backgroundColor: "#005072",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDesktop: {

    fontSize: 24,
  },
});
