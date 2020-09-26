const express = require('express');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/signup', UserController.store)
routes.get('/verifysession', SessionController.show)
routes.post('/createsession', SessionController.store)
module.exports = routes;