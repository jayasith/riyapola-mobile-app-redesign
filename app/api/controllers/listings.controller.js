import apiClient from "../api.config";

const getListings = () => apiClient.get("listings");

const getListingsOfCategory = (id) => apiClient.get(`listings/${id}`);

const addListing = (listing, onUploadProgress) => {
	const data = new FormData();
	data.append("title", listing.title);
	data.append("price", listing.price);
	data.append("categoryId", listing.category.value);
	data.append("description", listing.description);

	listing.images.map((image, index) =>
		data.append("images", {
			name: `image${index}`,
			type: "image/jpeg",
			uri: image,
		})
	);

	data.append("city", listing.city);

	return apiClient.post("listings", data, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

export default {
	getListings,
	addListing,
	getListingsOfCategory,
};
