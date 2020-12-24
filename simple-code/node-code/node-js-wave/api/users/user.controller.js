//Model
const users = require('../users/user.model');

class UserController {
	getUsers(req, res, next) {
		res.json(users);
	}

	createUser(req, res, next) {
		const newUser = {
			...req.body,
			id: users.length + 1,
		};

		users.push(newUser);
		res.json(newUser);
	}

	updateUser(req, res, next) {
		const updatedUser = {
			...users[req.userIdx],
			...req.body,
		};

		users[req.userIdx] = updatedUser;

		res.json(updatedUser);
	}

	deleteUser(req, res, next) {
		const deletedUser = users.splice(req.userIdx, 1);

		res.json(deletedUser);
	}
}

module.exports = new UserController();
