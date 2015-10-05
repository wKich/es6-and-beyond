'use strict';
require('babel/register');

const NODE_ENV = process.env.NODE_ENV || 'dev';
const PORT = process.env.PORT || 3000;

var server;

if (NODE_ENV == 'dev')
  server = require('./src/server.dev');
else
  server = require('./src/server.prod');

server.listen(PORT, function () {
  console.log('-> Server listening on %s', PORT);
});

