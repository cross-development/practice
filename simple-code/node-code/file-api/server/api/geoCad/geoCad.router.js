//Core
const { Router } = require('express');
//Controller
const geoCadController = require('./geoCad.controller');

//Init router
const geoCadRouter = Router();

// @ GET /api/contacts
geoCadRouter.get('/', geoCadController.listGeoCads);

// @ POST /api/contacts
geoCadRouter.post('/', geoCadController.addGeoCads);

module.exports = geoCadRouter;
