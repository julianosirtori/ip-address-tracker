import axios from 'axios';

const api = axios.create({
  baseURL: 'https://geo.ipify.org'
});

export const findIpAddressTracker = async (ip) => {
  return await api.get(`/api/v1?apiKey=${process.env.VUE_APP_KEY_IPIFY}&ipAddress=${ip}`)
}

export default api;