//Core
const express = require('express');
const cors = require('cors');
require('dotenv').config();
//Routes
const userRouter = require('./users/user.router');

const PORT = process.env.PORT || 8080;

class Server {
	constructor() {
		this.server = null;
	}

	start() {
		this.initServer();
		this.initMiddleware();
		this.initRoutes();
		this.initListening();
	}

	initServer() {
		this.server = express();
	}

	initMiddleware() {
		this.server.use(express.json());
		this.server.use(cors());
	}

	initRoutes() {
		this.server.use('/api/users', userRouter);
	}

	initListening() {
		this.server.listen(PORT, () => {
			console.log('Server started on port', PORT);
		});
	}
}

module.exports = Server;
