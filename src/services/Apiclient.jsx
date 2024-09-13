import axios from "axios";

export const baseURL = "http://localhost:8000/api/bookstore/";

export const ApiClient = axios.create({
  baseURL: baseURL,
});
