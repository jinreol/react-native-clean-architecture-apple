import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // 예시 API 엔드포인트
  timeout: 10000, // 요청 타임아웃 설정
});
