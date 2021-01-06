const router = require("express").Router();
let User = require("../models/user.model");

router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		if (users) {
			res.json(users);
		}
	} catch (error) {
		res.status(400).json("Error: " + error);
	}
});

router.post("/add", async (req, res) => {
	const username = req.body.username;
	const newUser = new User({ username });

	try {
		await newUser.save(() => {
			res.json("User Added!");
		});
	} catch (error) {
		res.status(400).json("Error: " + error);
	}
});

module.exports = router;
