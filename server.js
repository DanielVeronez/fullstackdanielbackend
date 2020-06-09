const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Configs
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors());
app.use(express.json());

//database connection
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });

//models
requireDir('./src/models');

//websocket - middleware
app.use((req, res, next) => {
    req.io = io;
    next();
});

//Routes
app.use('/api', require('./src/routes'));

//servidor
server.listen(3002);
console.log('Servidor ligado na porta 3002');