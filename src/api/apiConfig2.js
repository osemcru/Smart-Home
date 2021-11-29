import axios from 'axios'
import { baseHeadersConfig } from '../config/axiosConfig'

const { REACT_APP_API_SENSOR } = process.env

const nodeCoreAxios = axios.create({
  baseURL: REACT_APP_API_SENSOR,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

nodeCoreAxios.interceptors.request.use(baseHeadersConfig)

export default nodeCoreAxios
