// import { NavigationContainer } from "@react-navigation/native"; // <= Funciona de forma similar a la navegación de React Router DOM
// import { createStackNavigator } from "@react-navigation/stack"; // <= Funciona de forma similar a la navegación de React Router DOM
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

// import { globalStyles } from "./src/styles/globalStyles";
// import { InicioSesion } from "./src/Features/Modulo_usuarios/Vista_inicio_sesion/Paginas/InicioSesion";
// import { MenuPrincipalAdmin } from "./src/Features/Modulo_usuarios/Administrador/Menu_princial_admin/Pagina/MenuPrincipalAdmin/MenuPrincipalAdmin";
// import { Registro_Usuario_Pagina } from "./src/Features/Modulo_usuarios/Administrador/Vista_registro_usuario/Pagina/Registro_Usuario_Pagina";
// import { MenuPrincipal } from "./src/Features/Modulo_menus/Paginas/MenuPrincipal";
// import { IndicePP_PT } from "./src/Features/Modulo_pp_pt/Indice/Paginas/IndicePP_PT";
// import { SubIndicePP } from "./src/Features/Modulo_pp_pt/Vista_pp/Paginas/SubindicePP/SubIndicePP";
// import { FormularioRegistroPP_pagina } from "./src/Features/Modulo_pp_pt/Vista_pp/Paginas/FormularioRegistroPP/FormularioRegistroPP";
// import { FormularioResultadoPP } from "./src/Features/Modulo_pp_pt/Vista_pp/Paginas/FormularioResultadoPP/FormularioResultadoPP";
// import { Pp_Registrados } from "./src/Features/Modulo_pp_pt/Vista_pp/Paginas/Pp_Registrados/Pp_Registrados";
// import { SubIndicePT } from "./src/Features/Modulo_pp_pt/Vista_pt/Paginas/SubindicePT/SubIndicePT";
// import { PP_Registrados_PrePT_pagina } from "./src/Features/Modulo_pp_pt/Vista_pt/Paginas/PP_Registrados_PrePT_pagina/PP_Registrados_PrePT_pagina";
// import { FormularioRegistroPT_pagina } from "./src/Features/Modulo_pp_pt/Vista_pt/Paginas/FormularioRegistroPT/FormularioRegistroPT_pagina";
// import { Pt_Registrados } from "./src/Features/Modulo_pp_pt/Vista_pt/Paginas/Pt_Registrados/Pt_Registrados";
// import { FormularioResultadoPT } from "./src/Features/Modulo_pp_pt/Vista_pt/Paginas/FormularioResultadoPT/FormularioResultadoPT";

// const Stack = createStackNavigator();

export const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="InicioSesion" component={InicioSesion} />
          <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
          <Stack.Screen name="IndicePP_PT" component={IndicePP_PT} />
          <Stack.Screen name="SubIndicePP" component={SubIndicePP} />
          <Stack.Screen
            name="FormularioRegistroPP"
            component={FormularioRegistroPP_pagina}
          />
          <Stack.Screen name="Pp_Registrados" component={Pp_Registrados} />
          <Stack.Screen
            name="FormularioResultadoPP"
            component={FormularioResultadoPP}
          />
          <Stack.Screen name="SubIndicePT" component={SubIndicePT} />
          <Stack.Screen
            name="PP_Registrados_PrePT"
            component={PP_Registrados_PrePT_pagina}
          />
          <Stack.Screen
            name="FormularioRegistroPT"
            component={FormularioRegistroPT_pagina}
          />
          <Stack.Screen name="Pt_Registrados" component={Pt_Registrados} />
          <Stack.Screen
            name="FormularioResultadoPT"
            component={FormularioResultadoPT}
          />
          <Stack.Screen
            name="MenuPrincipalAdmin"
            component={MenuPrincipalAdmin}
          />
          <Stack.Screen
            name="RegistroUsuario"
            component={Registro_Usuario_Pagina}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}
