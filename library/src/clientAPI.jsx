// clientAPI.js
import axios from 'axios';

const clientAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const apiRequest = async ({ method, route, data }) => {
  const config = {
    method,
    url: route,
    data,
  };
  const response = await clientAPI(config);
  return response.data;
};
