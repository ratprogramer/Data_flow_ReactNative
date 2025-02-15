import { View } from "react-native";
import { Boton, BotonContainer } from "../../../Atomos/Boton/Boton";

export function MenuPrincipalBotones() {
  return (
    <View style={{ width: "100%", padding: 10 }}>
      <BotonContainer>
        <Boton text={"Derivado Lácteo Fermentado"} />
        <Boton text={"Producto UHT"} />
        <Boton text={"Materia Prima"} />
        <Boton text={"Aguas y Enjuagues"} />
        <Boton text={"Superficies y Equipos"} />
        <Boton text={"Ambientes"} />
        <Boton text={"Manipuladores"} />
        <Boton text={"Informes y Registros"} />
      </BotonContainer>
    </View>
  );
}
