import axios, { AxiosResponse } from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const api = {
    get(endpoint: string): Promise<AxiosResponse> {
        return axiosInstance.get(endpoint)
    }
} 