const { WebSocketServer } = require('ws');
const http = require('http');
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const {uuidv4:uuid}=require('uuid');


const app = require('./app');
const morgan = require('morgan');
const dotenv = require('dotenv');
app.use(morgan('dev'));

dotenv.config({ path: './config.env' });
const port = process.env.port || 2000;
app.listen(port, () => {
    console.log(`App running on the port ${port}`);

})


// Spinning the http server and the WebSocket server.

const port2 = 8000;
server.listen(port2, () => {
  console.log(`WebSocket server is running on port ${port2}`);
});


const rooms = {};


wsServer.on('connection', function(connection) {
  // Generate a unique code for every user
  const userId = uuid();
  console.log(`Recieved a new connection.`);

  // Store the new connection and handle messages
  clients[userId] = connection;
  console.log(`${userId} connected.`);
});