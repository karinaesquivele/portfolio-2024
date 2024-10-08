import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY; // Reemplaza con tu URL de API
/* const TOKEN = process.env.REACT_APP_API_TOKEN; */ // Asigna tu token aquí o recíbelo como argumento
// Función para hacer una petición POST con token
export const postFormData = async (data) => {

    try {
      /* console.log(`POST request to: ${API_URL}`); */ // Verifica la URL
      const response = await axios.post(
        `${API_URL}`,
        data,
        
      );
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición POST", error);
      throw error;
    }
  };
  

// Función para hacer una petición GET con token
/* export const getData = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/data`,
      {
        headers: {
          'Authorization': `Bearer ${TOKEN}` // Añadir el token en los headers
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al hacer la petición GET", error);
    throw error;
  }
}; */
