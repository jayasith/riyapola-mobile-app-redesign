import { create } from "apisauce";

const apiClient = create({ baseURL: "http://192.168.8.206:5000/api/" });

export default apiClient;
