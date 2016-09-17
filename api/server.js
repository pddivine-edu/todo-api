const config  = require('config');
const http    = require('http');
const express = require('express');
const app     = express();
const router  = express.Router();

//Middleware
app.use(express.static('public'));
app.use('/', require('./router'));

http.createServer(app)
    .listen(config.server.port, function () {
        console.log(`Listening on port ${config.server.port}`)
    });
