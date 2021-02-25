const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./users/userRouter');

const server = express();
server.use(helmet());
//handles the usage of using JSON in the request
server.use(express.json());
//handles the cross origin policy and to be able to be used in a frontend
server.use(cors());

//handles the POST and GET Route for the user
server.use('/api/users', userRouter);
//endpoint for a sanity check
server.use('/', (req, res) => res.send({message: 'Application is running'}))

module.exports = server;