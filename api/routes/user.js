const express = require("express");
const router = express.Router();

const usersStore = require("../store/users");
const listingsStore = require("../store/listings");
const auth = require("../middleware/auth");

router.get("/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const user = usersStore.getUserById(userId);
	console.log(userId);
	if (!user) return res.status(404).send();

	const listings = listingsStore.filterListings(
		(listing) => listing.userId === userId
	);
	console.log(user);
	// console.log(listings);

	res.send({
		id: user.id,
		name: user.name,
		email: user.email,
		listings: listings.length,
		BirthDate: user.BirthDate,
		gender: user.gender,
		Job: user.Job,
		Location: user.Location,
		Image: user.images,
	});
});

router.put("/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const { name, email, password, Job, Location } = req.body;

	const user = { name, email, password, Job, Location };
	usersStore.getUserByIdAndReplace(userId, user);

	res.status(201).send(user);
});

module.exports = router;
