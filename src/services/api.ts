import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const API_BASE_URL = '';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await axiosInstance.get<T>(url, config);

    return response.data;
  },
};
