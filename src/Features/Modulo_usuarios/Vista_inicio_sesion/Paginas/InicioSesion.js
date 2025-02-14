import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";
// import {LoginForm} from "./../Organismos/LoginForm.jsx"
// import "./InicioSesion.css"

export const InicioSesion = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />  
      <LinearGradient
        colors={['#001d2e', '#0072b1']}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        <Text style={styles.text}>Inicio de Sesión</Text>
      </LinearGradient>
    </View>
  );
};

/*
.inicioSesion-pagina{
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #fff;
    align-items: center;
    width: 100%;
    gap: 100px;
    background-color: antiquewhite;
    justify-content: space-around;
    background: linear-gradient(to bottom, #001d2e, #0072b1);
}
.titulo{
    font-size: 44px;
}
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    text: {
      fontSize: 44,
      fontWeight: 'bold',
      color: '#ffd',
    },
  });