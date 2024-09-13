import { ApiClient } from "./Apiclient";

export const getLogin = (data) => ApiClient.post("login/", data);

export const getLogout = () => ApiClient.post("logout/");
