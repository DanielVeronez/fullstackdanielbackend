const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const server = express();

//Configs
server.use(cors());
server.use(express.json());

//database connection
mongoose.connect('mongodb+srv://admin:admin@cluster0-1kfys.mongodb.net/integraGit?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

//models
requireDir('./src/models');

//Routes
server.use('/api',require('./src/routes'));

//servidor
server.listen(3002);
console.log('Servidor ligado na porta 3002');