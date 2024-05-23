import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // Puedes añadir más headers si es necesario
  },
});

// Interceptores de solicitud y respuesta
api.interceptors.request.use(
  (config) => {
    // Puedes añadir lógica para manejar tokens de autenticación aquí
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores
    if (error.response && error.response.status === 401) {
      // Redirigir al login si no autorizado
    }
    return Promise.reject(error);
  }
);

export default api;
