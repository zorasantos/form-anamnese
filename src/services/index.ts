import { IDifficultProps, ILoginProps, IPersonalDataProps } from "~/types";
import { api } from "./api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export function createPersonalData(payload: IPersonalDataProps) {
  return api.post(`${baseURL}/personal`, payload);
}

export function createDifficulties(payload: IDifficultProps) {
  return api.post(`${baseURL}/difficult`, payload);
}

export function login(payload: ILoginProps) {
  return api.post(`${baseURL}/session`, payload);
}

export function getIsTermsOfUse(name: string) {
  return api.post(`${baseURL}/term`, { name });
}
