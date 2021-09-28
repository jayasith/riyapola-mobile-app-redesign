import apiClient from "../api.config";

const getListings = () => apiClient.get("listings");

export default {
	getListings,
};
