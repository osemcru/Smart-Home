import api from "./apiConfig";
import api2 from "./apiConfig2";

const sensors = {};

sensors.changeLightStatus = (status, data) => api.post(`prod/${status}`, data)

sensors.checkTemperature = () => api2.get('prod/v1/broker/temperatura')

sensors.checkHumidity = () => api2.get('prod/v1/broker/humedad')

sensors.checkMovement = (data) => api.post('prod/movimiento',data, { baseURL: process.env.REACT_APP_API_URL })

sensors.checkStatus = (data) => api.post('prod/apertura', data, { baseURL: process.env.REACT_APP_API_URL })

export default sensors