import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token") as string;

    request.headers.Authorization = token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/";
      localStorage.clear();
    }

    if (
      error.request.responseType === "blob" &&
      error.response.data instanceof Blob &&
      error.response.data.type &&
      error.response.data.type.toLowerCase().indexOf("json") != -1
    ) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          error.response.data = JSON.parse(reader.result as string);
          resolve(Promise.reject(error));
        };

        reader.onerror = () => {
          reject(error);
        };

        reader.readAsText(error.response.data);
      });
    }
    return Promise.reject(error);
  },
);
