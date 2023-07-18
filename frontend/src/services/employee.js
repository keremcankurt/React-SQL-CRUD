import { del, get, post, put } from "./request";
const BASE_URL = "http://localhost:4000";

export const getAllEmployees = () => get(`${BASE_URL}/employees`);
export const addNewEmployee = data => post(`${BASE_URL}/newemployee`,data);
export const updateEmployee = (data) => put(`${BASE_URL}/updateemployee/${data.ID}`,data);
export const removeEmployee = id => del(`${BASE_URL}/removeemployee/${id}`);

