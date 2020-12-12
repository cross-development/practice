//Core
const express = require('express');
//Middleware
const cors = require('cors');
require('dotenv').config();
//Routes
const geoCadRouter = require('./geoCad/geoCad.router');

class GeoCadServer {
	constructor() {
		this.server = null;
	}

	start() {
		this.initServer();
		this.initMiddleware();
		this.initRoutes();
		this.startListening();
	}

	initServer() {
		this.server = express();
	}

	initMiddleware() {
		this.server.use(express.json({ limit: '10mb', extended: true }));
		this.server.use(express.urlencoded({ limit: '10mb', extended: true }));
		this.server.use(cors({ origin: 'http://localhost:3000' }));
	}

	initRoutes() {
		this.server.use('/api/geoCad', geoCadRouter);
	}

	startListening() {
		this.server.listen(process.env.PORT, () => {
			console.log('Server started listening on port', process.env.PORT);
		});
	}
}

module.exports = GeoCadServer;
