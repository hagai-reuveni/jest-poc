import axios from 'axios';

export const BASE_URL = 'https://randomuser.me/api/';
/**
 * The initial intent was to use axios (a promise based http client)
 * There is a problem mocking axios, so I'm using a 'regular' fetch
 */
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
  });

//export const getAll = () => axiosInstance.get('?results=20');
export const getAll = () => fetch(`${BASE_URL}?results=20`).then(res => {
  console.log('response: ', res);
  res.json();
});
