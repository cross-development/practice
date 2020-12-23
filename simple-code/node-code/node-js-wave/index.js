const express = require('express');
const middleware = require('./middleware');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const port = 3001;
const url = 'http://api.openweathermap.org/data/2.5';
const API_KEY = process.env.OW_API_KEY;
const PORT = process.env.PORT;

app.get(
	'/weather',
	middleware.validateWeatherParams,
	async (req, res, next) => {
		const { lat, lon } = req.query;

		const result = await fetch(
			`${url}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
		);

		const data = await result.json();

		res.status(200).json(data);
	},
);

app.post('/weather', (req, res, next) => {});

app.listen(PORT, () => {
	console.log('Server started on port', PORT);
});
