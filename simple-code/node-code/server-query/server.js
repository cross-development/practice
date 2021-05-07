//Express
const express = require('express');
//Swagger docs
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
//Middleware
const low = require('lowdb');
const cors = require('cors');
const morgan = require('morgan');
const FileSync = require('lowdb/adapters/FileSync');
//Routes
const booksRouter = require('./routes/books');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ books: [] }).write();

const app = express();
const port = process.env.PORT || 4000;

app.db = db;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Library API',
			version: '1.0.0',
			description: 'This is a simple Library CRUD API.',
		},
		servers: [{ url: 'http://localhost:3000' }],
	},
	apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);
app.use(
	'/api-docs',
	swaggerUI.serve,
	swaggerUI.setup(specs, { explorer: true }),
);

app.use('/books', booksRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
