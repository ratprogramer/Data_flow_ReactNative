import { VITE_DOMINIO } from '@env';
import { Alert } from "react-native";

export async function useGetFetch(endPoint) {
  try {
      const response = await fetch(VITE_DOMINIO + endPoint, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      return result || "Sin mensaje en la respuesta";
  } catch (error) {
      Alert("Error", "Error interno del servidor", "error");
  }
}

