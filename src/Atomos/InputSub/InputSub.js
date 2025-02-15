import { Pressable, Text, StyleSheet, useWindowDimensions } from 'react-native';

export const InputSub = ({ text, onPress }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isDesktop && styles.buttonDesktop,
        pressed && styles.buttonPressed, // Aplica este estilo cuando se presiona
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, isDesktop && styles.textDesktop]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    backgroundColor: '#1E3148',
    width: '100%',
    fontSize: 18,
    padding: 4,
    height: 40, // Aproximado a 2.5rem
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 3, // Solo para Android
  },
  buttonDesktop: {
    width: '60%', // Ajuste para escritorio
    height: 50,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDesktop: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonPressed: {
    backgroundColor: '#0072b1', // Cambio de color al presionar
  },
});
