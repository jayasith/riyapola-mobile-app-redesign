const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../store/listings");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const delay = require("../middleware/delay");
const listingMapper = require("../mappers/listings");
const config = require("config");

const upload = multer({
	dest: "uploads/",
	limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
	title: Joi.string().required(),
	description: Joi.string().allow(""),
	price: Joi.number().required().min(1),
	categoryId: Joi.number().required().min(1),
	city: Joi.string().required(),
};

const validateCategoryId = (req, res, next) => {
	if (!categoriesStore.getCategory(parseInt(req.body.categoryId)))
		return res.status(400).send({ error: "Invalid categoryId." });

	next();
};

router.get("/", (req, res) => {
	const listings = store.getListings();
	const resources = listings.map(listingMapper);
	res.send(resources);
});

router.get("/:id", (req, res) => {
	console.log(req.params.id);
	const listings = store.getListingsOfCategory(req.params.id);
	console.log(listings);
	res.send(listings);
});

router.post(
	"/",
	[
		upload.array("images", config.get("maxImageCount")),
		validateWith(schema),
		validateCategoryId,
		imageResize,
	],

	async (req, res) => {
		const listing = {
			title: req.body.title,
			price: parseFloat(req.body.price),
			categoryId: parseInt(req.body.categoryId),
			description: req.body.description,
			city: req.body.city,
		};
		listing.images = req.images.map((fileName) => ({ fileName: fileName }));

		if (req.user) listing.userId = req.user.userId;

		store.addListing(listing);

		res.status(201).send(listing);
	}
);

module.exports = router;
