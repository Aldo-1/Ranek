import axios from 'axios'

const axiosURL = axios.create({
  baseURL: "https://ranekapi.origamid.dev/json/api"
})

axiosURL.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);


export default axiosURL

export function getCep(cep){
  return axios.get(`https://viacep.com.br/ws/${cep}/json`)
}