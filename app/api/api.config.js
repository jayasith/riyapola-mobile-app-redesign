import { create } from "apisauce";

const apiClient = create({ baseURL: "http://192.168.8.1:5000/api" });

export default apiClient;
