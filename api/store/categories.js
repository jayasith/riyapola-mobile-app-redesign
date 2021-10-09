const categories = [
	{
		id: 1,
		name: "Vehicles",
		icon: "car",
		backgroundColor: "#fc5c65",
		color: "white",
	},
	{
		id: 2,
		name: "Electronics",
		icon: "tablet-cellphone",
		backgroundColor: "#fd9644",
		color: "white",
	},
	{
		id: 3,
		name: "Property",
		icon: "home-outline",
		backgroundColor: "#fed330",
		color: "white",
	},
	{
		id: 4,
		name: "Education",
		icon: "book-outline",
		backgroundColor: "#fed330",
		color: "white",
	},
	{
		id: 5,
		name: "Furniture",
		icon: "floor-lamp",
		backgroundColor: "#fed330",
		color: "white",
	},
	{
		id: 6,
		name: "Sports",
		icon: "bike",
		backgroundColor: "#26de81",
		color: "white",
	},
	{
		id: 7,
		name: "Clothing",
		icon: "shoe-formal",
		backgroundColor: "#2bcbba",
		color: "white",
	},
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
	getCategories,
	getCategory,
};
