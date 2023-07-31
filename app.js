require('dotenv').config();

const Read = require('./models/read');
const Server = require('./models/server');
read= new Read();
server = new Server();
server.listen();