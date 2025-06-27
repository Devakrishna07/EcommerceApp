import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://ecommerceapp-1-yqy3.onrender.com/";

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.get(url, config);
    return response.data;
};

const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>{
    const response: AxiosResponse<T> = await axiosInstance.post(url, data, config);
    return response.data;
};

const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>{
    const response: AxiosResponse<T> = await axiosInstance.put(url, data, config);
    return response.data;
};

const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
  return response.data;
};

const api = {
  get,
  post,
  put,
  delete: del,
};

export default api;
