const express = require('express');

const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index );
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;