import axios from 'axios'

const axiosURL = axios.create({
  baseURL: "http://localhost:3000"
})

export default axiosURL

export function getCep(cep){
  return axios.get(`https://viacep.com.br/ws/${cep}/json`)
}