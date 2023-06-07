import { IDifficultProps } from "~/types";
import { api } from "./api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// typar o payload
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createPersonalData(payload: any) {
  return api.post(`${baseURL}/personal`, payload);
}

export function createDifficulties(payload: IDifficultProps) {
  console.log("payload", payload);
  return api.post(`${baseURL}/difficult`, payload);
}
