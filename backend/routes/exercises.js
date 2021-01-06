const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.get("/", async (req, res) => {
	try {
		const exercises = await Exercise.find();
		if (exercises) {
			res.json(exercises);
		}
	} catch (error) {
		res.status(400).json("Error: " + error);
	}
});

router.post("/add", async (req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
		username,
		description,
		duration,
		date
	});

	try {
		await newExercise.save(() => {
			res.json("Exercise Added!");
		});
	} catch (error) {
		res.status(400).json("Error: " + error);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		await Exercise.findByIdAndDelete(req.params.id, ()=>{
            
        });
	} catch (error) {
		res.status(400).json("Error: " + error);
	}
});

module.exports = router;
