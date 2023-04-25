/* eslint-disable no-console */
import axios from 'axios';

export const cardInstance = axios.create({
  baseURL: 'http://localhost:3001/cards/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

export const wordInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/freedictionary`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

export const authInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

export const profileInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/profile`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});
