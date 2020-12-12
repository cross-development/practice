//Core
const path = require('path');
const fsPromises = require('fs/promises');
//Utils
const { v4: uuidv4 } = require('uuid');
//Data path
const geoCadPath = path.join(__dirname, '../../db/geoCad.json');

async function listGeoCads(req, res, next) {
	try {
		const data = await fsPromises.readFile(geoCadPath, 'utf-8');

		const parsedData = JSON.parse(data);

		return await res.status(200).send(parsedData);
	} catch (error) {
		console.error(error);
	}
}

async function addGeoCads(req, res, next) {
	try {
		const geoData = await fsPromises.readFile(geoCadPath, 'utf-8');

		const updatedData = req.body.map(item => ({ id: uuidv4(), ...item }));

		const parsedData = JSON.parse(geoData).concat(updatedData);
		const stringifyParsedData = JSON.stringify(parsedData, null, 2);

		await fsPromises.writeFile(geoCadPath, stringifyParsedData, 'utf-8');

		return await res.status(201).send(updatedData);
	} catch (error) {
		console.error(error);
	}
}

module.exports = { listGeoCads, addGeoCads };
