import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:4000",
  timeoutErrorMessage: "Não foi possível estabelecer conexão com o servidor",
  timeout: 60 * 1000,
  validateStatus: (status) => {
    return status >= 200 && status <= 300;
  },
});

export default Api;
