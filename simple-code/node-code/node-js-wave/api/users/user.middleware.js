//Validate
const Joi = require('joi');
//Model
const users = require('../users/user.model');
//Error
const NotFoundError = require('../errors/notFoundError');

function validateCreateUser(req, res, next) {
	const validationRules = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().required(),
		password: Joi.string().required(),
	});

	const validationResult = validationRules.validate(req.body);

	if (validationResult.error) {
		return res.status(400).send(validationResult.error);
	}

	next();
}

function validateUpdateUser(req, res, next) {
	const validationRules = Joi.object({
		name: Joi.string(),
		email: Joi.string(),
		password: Joi.string(),
	});

	const validationResult = validationRules.validate(req.body);

	if (validationResult.error) {
		return res.status(400).send(validationResult.error);
	}

	next();
}

function validateUserId(req, res, next) {
	const { userId } = req.params;
	const id = parseInt(userId);

	const userIdx = users.findIndex(user => user.id === id);

	if (userIdx === -1) {
		throw new NotFoundError();
		// return res.status(404).send('User is not found');
	}

	req.userIdx = userIdx;

	next();
}

module.exports = { validateCreateUser, validateUpdateUser, validateUserId };
