'use server';
import axios, { AxiosRequestConfig } from 'axios';
import { apiEndpoint } from './end-point';

const requestApi = (
  token: string,
  { method = 'GET', ...config }: AxiosRequestConfig
) => {
  return axios({
    method,
    baseURL: apiEndpoint,
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

export default requestApi;
