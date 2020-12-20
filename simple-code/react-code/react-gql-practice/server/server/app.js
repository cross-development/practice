//Core
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
//Middleware
const cors = require('cors');
require('dotenv').config();
//Schema
const schema = require('../schema/schema');

class GraphQLServer {
	//Initial server state
	constructor() {
		this.server = null;
		this.port = 3005;
	}

	//Server start
	async start() {
		this.initServer();
		this.initMiddleware();
		await this.initDatabase();
		this.initGraphQL();
		this.startListening();
	}

	//Server init
	initServer() {
		this.server = express();
	}

	//Middleware init
	initMiddleware() {
		this.server.use(express.json());
		this.server.use(cors({ origin: '*' }));
	}

	//MongoDB init
	async initDatabase() {
		try {
			await mongoose.connect(process.env.MONGODB_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			});

			console.log('Database connection successful');
		} catch (error) {
			process.exit(1);
		}
	}

	//GraphQL init
	initGraphQL() {
		this.server.use(
			'/graphql',
			graphqlHTTP({
				schema,
				graphiql: true,
			}),
		);
	}

	//Start listening on port 3005
	startListening() {
		this.server.listen(this.port, () => {
			console.log('Server started listening on port', this.port);
		});
	}
}

module.exports = GraphQLServer;
