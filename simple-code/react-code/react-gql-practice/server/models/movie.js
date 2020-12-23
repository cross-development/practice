const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
	name: String,
	genre: String,
	watched: Boolean,
	rate: Number,
	directorId: String,
});

module.exports = model('Movie', movieSchema);
