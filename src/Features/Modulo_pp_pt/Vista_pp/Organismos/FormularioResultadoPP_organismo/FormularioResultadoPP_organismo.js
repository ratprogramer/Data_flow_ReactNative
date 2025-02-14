import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { decodeToken } from "../../../../../helpers/decodeToken";
import { usePostFetch } from "../../../../../helpers/usePostFetch";

export function FormularioResultadoPP_organismo({ route }) {
  const { id } = route.params || {};
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fecha_analisis: new Date().toISOString().split("T")[0],
    },
  });

  const opcionesCoNC = [
    { label: "Cumple", value: "C" },
    { label: "No cumple", value: "NC" },
  ];

  const onSubmit = async (data) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      Alert.alert("Error", "No se encontraron credenciales válidas en el sistema");
      navigation.navigate("Home");
      return;
    }

    const decode = decodeToken(token);
    data["responsable_analisis"] = parseInt(decode.id);
    data["id_pp"] = id;

    const response = await usePostFetch("/producto/registrar_r", data);
    if (!response.success) {
      Alert.alert("Error", JSON.stringify(response));
    } else {
      Alert.alert("Éxito", "Producto en proceso registrado con éxito");
      navigation.navigate("Menu");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, alignItems: "center" }}>
      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Fecha de análisis *</Text>
        <Controller
          control={control}
          name="fecha_analisis"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.fecha_analisis && <Text style={{ color: "red" }}>{errors.fecha_analisis.message}</Text>}
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>E. Coli *</Text>
        <Controller
          control={control}
          name="e_coli"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
              placeholder="Ingrese cantidad de E. coli"
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
        />
        {errors.e_coli && <Text style={{ color: "red" }}>{errors.e_coli.message}</Text>}
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Coliformes totales *</Text>
        <Controller
          control={control}
          name="coliformes"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
              placeholder="Ingrese cantidad de coliformes"
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
        />
        {errors.coliformes && <Text style={{ color: "red" }}>{errors.coliformes.message}</Text>}
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Mohos y levaduras *</Text>
        <Controller
          control={control}
          name="mohos_ley"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
              placeholder="Ingrese cantidad de mohos y levaduras"
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
        />
        {errors.mohos_ley && <Text style={{ color: "red" }}>{errors.mohos_ley.message}</Text>}
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Observaciones</Text>
        <Controller
          control={control}
          name="observaciones"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
              placeholder="Ingrese observaciones"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Cabina *</Text>
        <Controller
          control={control}
          name="cabina"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              items={opcionesCoNC}
              value={value}
            />
          )}
        />
        {errors.cabina && <Text style={{ color: "red" }}>{errors.cabina.message}</Text>}
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Medio de cultivo *</Text>
        <Controller
          control={control}
          name="medio_cultivo"
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              onValueChange={onChange}
              items={opcionesCoNC}
              value={value}
            />
          )}
        />
        {errors.medio_cultivo && <Text style={{ color: "red" }}>{errors.medio_cultivo.message}</Text>}
      </View>

      <Button title="Ingresar" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
