import axios, { AxiosRequestConfig, AxiosInstance, CreateAxiosDefaults, AxiosPromise } from 'axios';

const axiosParams: CreateAxiosDefaults<any> = {
    baseURL: process.env.BACKEND_URL || 'http://localhost:8000'
}

const axiosInstance: AxiosInstance = axios.create(axiosParams)

interface requestTypes {
    get: (url: string, config?: AxiosRequestConfig<any>) => AxiosPromise<any>,
    post: (url: string, data?: any, config?: AxiosRequestConfig<any>) => AxiosPromise<any>,
    put: (url: string, data?: any, config?: AxiosRequestConfig<any>) => AxiosPromise<any>,
    delete: (url: string, config?: AxiosRequestConfig<any>) => AxiosPromise<any>
}

const request = (axios: AxiosInstance): requestTypes => {
    return {
        get: (url: string, config: AxiosRequestConfig<any> = {}) =>
            axios.get(url, config),
        post: (url: string, data: any, config: AxiosRequestConfig<any> = {}) =>
            axios.post(url, data, config),
        put: (url: string, data: any, config: AxiosRequestConfig<any> = {}) =>
            axios.put(url, data, config),
        delete: (url: string, config: AxiosRequestConfig<any> = {}) =>
            axios.delete(url, config),
    }
}

export default request(axiosInstance)