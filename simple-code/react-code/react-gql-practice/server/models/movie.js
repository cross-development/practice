const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
	name: { type: String, required: true },
	genre: { type: String, required: true },
	directorId: { type: String, required: true },
});

module.exports = model('Movie', movieSchema);
