const mongoose = require("mongoose");

const Schema = mongoose.schema;

const exerciseModel = new Schema(
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
