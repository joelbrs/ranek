import axios, { AxiosResponse } from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const api = {
    get(endpoint: string): Promise<AxiosResponse> {
        return axiosInstance.get(endpoint)
    },

    post(endpoint: string, body: any): Promise<AxiosResponse> {
        return axiosInstance.post(endpoint, body);
    }
} 

export function getCep(cep: string) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}