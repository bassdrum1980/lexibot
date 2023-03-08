/* eslint-disable no-console */
import axios from 'axios';

// Errors logging
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log('Problem with the response');
      console.log(`Response status - ${error.response.status}`);
      console.log(`Response data - ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      console.log('Problem with the request');
      console.log(`error - ${error.request}`);
    } else {
      console.log(
        'Something happened in setting up the request that triggered an Error'
      );
      console.log(`error - ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export const userInstance = axios.create({
  baseURL: 'http://localhost:3001/users',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

export const wordInstance = axios.create({
  baseURL: 'http://localhost:3001/words/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});
