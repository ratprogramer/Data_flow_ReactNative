import { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { LabelRN } from '../../../../Atomos/Label/LabelRN';
import { InputTxt } from '../../../../Atomos/InputTxt/InputTxt';
import { InputSub } from '../../../../Atomos/InputSub/InputSub';

export const LoginForm = ({ navigation }) => {
  // Implementar la lógica

  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // redirigirá sin validad, es solo para probar
    navigation.navigate('MenuPrincipal');
  };

  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <View
        style={[
          styles.groupContainer,
          isDesktop && styles.groupContainerDesktop,
        ]}
      >
        <LabelRN text={'Usuario'} />
        <InputTxt
          placeholder={'Ingrese usuario'}
          value={username}
          onChangeText={setUsername}
        />
        <LabelRN text={'Contraseña'} />
        <InputTxt
          placeholder={'Ingrese contraseña'}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <InputSub
        text={'Ingresar'}
        style={isDesktop && styles.buttonDesktop}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerDesktop: {
    paddingHorizontal: 80, // Más espacio en PC
  },
  groupContainer: {
    marginBottom: 15,
    width: '100%',
  },
  groupContainerDesktop: {
    width: '60%', // Hacemos más angosto el formulario en PC
  },
  buttonDesktop: {
    paddingVertical: 12,
    paddingHorizontal: 50, // Botón más grande en PC
  },
});
