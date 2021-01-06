const mongoose = require("mongoose");

const exerciseModel = new mongoose.Schema(
	{
		username: { type: String, require: true },
		description: { type: String, required: true },
		duration: { type: Number, required: true },
		date: { type: Date, required: true }
	},
	{
		timestamps: true
	}
);

const Exercise = mongoose.model("Exercise", exerciseModel);

module.exports = Exercise;
