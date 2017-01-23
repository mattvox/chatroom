var socket_io = require('socket.io');
var http = require('http');
var express = require('express');

var app = express();

app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

var userCount = 0;

io.on('connection', function(socket) {
    userCount++;
    console.log('Client connected');
    socket.emit('message', 'You have connected');
    socket.broadcast.emit('message', 'New client connected');
    io.emit('message', userCount + ' users connected')
    
    socket.on('message', function(message) {
        console.log('Received message:', message);
        socket.broadcast.emit('message', message);
    });
    
    socket.on('disconnect', function() {
        userCount--;
        console.log('Client disconnected')
        socket.broadcast.emit('message', 'Client disconnected');
    });
})




server.listen(process.env.PORT || 8080);

//Add support for nicknames

//Add "{user} is typing" functionality

//Show who's online

//Add private messaging