import axios from 'axios';

export const BASE_URL = 'https://randomuser.me/api/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
  });

//export const getAll = () => axiosInstance.get('?results=20');
export const getAll = () => fetch(`${BASE_URL}?results=20`);
