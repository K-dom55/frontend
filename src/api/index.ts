import axios from 'axios';

export interface ApiResponseDTO<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  result?: T;
}

export const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});
