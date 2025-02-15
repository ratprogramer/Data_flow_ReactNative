import { Alert } from "react-native";
import { VITE_DOMINIO } from '@env'

export const usePostFetch = async (endPoint, data) => {
  try {
    const response = await fetch(VITE_DOMINIO + endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result || "Sin mensaje en la respuesta";
  } catch (error) {
    Alert.alert("Error", "No se pudo completar la solicitud");
  }
}
