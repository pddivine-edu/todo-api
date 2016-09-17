const config  = require('config');
const http    = require('http');
const express = require('express');
const app     = express();
const pgHdlr  = require('data/postgresHandler.js');
const router  = express.Router();

//Middleware
app.use(express.static('public'));
app.use('/', require('./router'));

http.createServer(app)
    .listen(config.server.port, function () {
        console.log(`Listening on port ${config.server.port}`)
    });
