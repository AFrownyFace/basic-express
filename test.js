const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
  }
});

io.on('connection', (socket) => {
  console.log('user connected: ' + socket.id);

  socket.on('msg', (data) => {
    io.sockets.emit('msg_received', data )
  
  })

  

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

server.listen(3001, () => {
  console.log('listening on *:3000');
});