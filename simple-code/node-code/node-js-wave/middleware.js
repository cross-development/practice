const Joi = require('joi');

function validateWeatherParams(req, res, next) {
	const {
		query: { lat, lon },
	} = req;

	const validationRules = Joi.object({
		lat: Joi.number().required(),
		lon: Joi.number().required(),
	});

	const validationResult = validationRules.validate({
		lat: parseFloat(lat),
		lon: parseFloat(lon),
	});

	if (validationResult.error) {
		return res.status(400).send(validationResult.error);
	}

	next();
}

module.exports = { validateWeatherParams };
