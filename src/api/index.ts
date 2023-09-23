export interface ApiResponseDTO<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  result: T;
}