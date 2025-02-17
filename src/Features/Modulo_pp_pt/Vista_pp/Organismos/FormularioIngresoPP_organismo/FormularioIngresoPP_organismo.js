// import { useState, useEffect } from "react";
import { View, Text, Alert, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
// import { InputSub } from "../../../../../Atomos/InputSub/InputSub";

// import { useNavigate } from "react-router-dom";
// import { decodeToken } from "../../../../../helpers/decodeToken";
// import { usePostFetch } from "../../../../../helpers/usePostFetch";
// import { SelectGroup } from "../../../../../Moleculas/InputGroup/SelectGroup/SelectGroup";
// import { TimeGroup } from "../../../../../Moleculas/InputGroup/TimeGroup/TimeGroup";
// import { TxtGroup } from "../../../../../Moleculas/InputGroup/TxtGroup/TxtGroup";

export const FormularioIngresoPP_organismo = () => {
  // const { control, handleSubmit, watch } = useForm({
  //   defaultValues: {
  //     fecha_analisis: new Date().toISOString().split("T")[0], // Valor inicial
  //   },
  // });
  // const navigate = useNavigate();

  // const [isAlternativo, setIsAlternativo] = useState(false);

  // const puntoMuestraValue = watch("punto_muestra", "");

  // useEffect(() => {
  //   setIsAlternativo(puntoMuestraValue === "alternativo");
  // }, [puntoMuestraValue]);

  // const onSubmit = async (data) => {
  //   if (data["nombre_pp"] === "" || data["punto_muestra"] === "") {
  //     Alert.alert("Error", "Los campos con * son obligatorios");
  //     return;
  //   }

  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     Alert.alert(
  //       "Error",
  //       "No se encontraron credenciales válidas en el sistema"
  //     );
  //     navigate("/");
  //     return;
  //   }
  //   const decode = decodeToken(token);
  //   data["responsable_analisis"] = parseInt(decode.id);
  //   const response = await usePostFetch("/producto/registrar_pp", data);
  //   if (!response.success) {
  //     Alert.alert("Error", JSON.stringify(response));
  //   } else {
  //     Alert.alert("Éxito", "Producto en proceso registrado con éxito");
  //     navigate("/menu");
  //   }
  // };

  // const onError = (errors) => {
  //   for (const error in errors) {
  //     Alert.alert("Error", errors[error].message);
  //   }
  // };

  // const opcionesNombreProducto = [
  //   { value: "Bebida semi elaborada", placeHolder: "Bebida semi elaborada" },
  //   { value: "Bebida pasteurizada", placeHolder: "Bebida pasteurizada" },
  //   { value: "Corte de bebida láctea", placeHolder: "Corte de bebida láctea" },
  // ];

  // const opcionesPuntoToma = [
  //   { value: "Tanque 7", placeHolder: "Tanque 7" },
  //   { value: "Tanque 9", placeHolder: "Tanque 9" },
  //   { value: "Tanque 10", placeHolder: "Tanque 10" },
  //   { value: "Tanque 12", placeHolder: "Tanque 12" },
  //   { value: "alternativo", placeHolder: "Punto de toma alternativo" },
  // ];

  // const validaciones = { required: "los campos con * son obligatorios" };

  return (
    <View style={{ padding: 20 }}>
      <Text>hello</Text>

      <Controller
        // control={control}
        // render={({ field: { onChange, value } }) => (
        //   <SelectGroup
        //     id={"nombre_pp"}
        //     label={"Nombre del producto *"}
        //     opciones={opcionesNombreProducto}
        //     value={value}
        //     onChange={onChange}
        //     validaciones={validaciones}
        //   />
        // )}
        name="nombre_pp"
        rules={{ required: "Los campos con * son obligatorios" }}
      />

      {/* <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TimeGroup
            id={"fecha_analisis"}
            label={"Fecha de análisis *"}
            type={"date"}
            value={value}
            onChange={onChange}
            validaciones={validaciones}
            defaultDate={true}
          />
        )}
        name="fecha_analisis"
        rules={{ required: "Los campos con * son obligatorios" }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TimeGroup
            id={"fecha_toma_muestra"}
            label={"Fecha de toma de muestra *"}
            type={"date"}
            value={value}
            onChange={onChange}
            validaciones={validaciones}
          />
        )}
        name="fecha_toma_muestra"
        rules={{ required: "Los campos con * son obligatorios" }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TimeGroup
            id={"hora_toma_muestra"}
            label={"Hora de toma de muestra *"}
            type={"time"}
            value={value}
            onChange={onChange}
            validaciones={validaciones}
          />
        )}
        name="hora_toma_muestra"
        rules={{ required: "Los campos con * son obligatorios" }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectGroup
            id={"punto_muestra"}
            label={"Punto de toma de muestra *"}
            opciones={opcionesPuntoToma}
            value={value}
            onChange={(e) => onChange(e)}
            validaciones={validaciones}
          />
        )}
        name="punto_muestra"
        rules={{ required: "Los campos con * son obligatorios" }}
      />

      {isAlternativo && (
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TxtGroup
              id={"punto_alterno"}
              label={"Punto de toma alternativo *"}
              placeholder={"Ingrese el punto alternativo"}
              value={value}
              onChange={onChange}
              validaciones={validaciones}
            />
          )}
          name="punto_alterno"
          rules={{ required: "Los campos con * son obligatorios" }}
        />
      )}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TxtGroup
            id={"lote"}
            label={"Lote *"}
            placeholder={"Ingrese el lote"}
            value={value}
            onChange={onChange}
            validaciones={validaciones}
          />
        )}
        name="lote"
        rules={{ required: "Los campos con * son obligatorios" }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TxtGroup
            id={"observaciones"}
            label={"Observaciones"}
            placeholder={"Ingrese las observaciones"}
            value={value}
            onChange={onChange}
          />
        )}
        name="observaciones"
      />
      */}

      {/* <InputSub text={"Ingresar"} onPress={Alert.alert("hello")} /> */}
    </View>
  );
};
