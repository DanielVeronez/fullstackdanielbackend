const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const JobsController = require('./controllers/jobsController');

routes.post('/users', UserController.persisteUser);
routes.get('/users', UserController.listUser);
routes.get('/userGit', UserController.getUserGit);
routes.post('/login/:username', UserController.login);

//Login
routes.get('/user/:id', UserController.detail);

//Jobs
routes.post('/jobs', JobsController.storage);
routes.get('/jobs', JobsController.listJobs);

module.exports = routes;