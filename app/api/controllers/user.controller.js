import apiClient from "../api.config";

const getUserById = apiClient.get("user/2");
const updateUser = apiClient.put("/:id");

export default {
	getUserById,
	updateUser,
};
