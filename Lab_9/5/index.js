const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

let totalUsers = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('new user', () => {
        totalUsers = io.engine.clientsCount; 
        socket.emit('new user', {nickname: null, text: 'welcome!', totalUsers: totalUsers})
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        io.emit('not typing', '')
    });

    socket.on('choose name', (name) => {
        totalUsers = io.engine.clientsCount; 
        socket.broadcast.emit('new user', {nickname: name, text: 'has joined', totalUsers: totalUsers}) 
        socket.id = name; 
    });    

    socket.on('typing', (name) => {
        socket.broadcast.emit('user typing', name)
        socket.emit('not typing', '')
    })

    socket.on('disconnect', () => {
        totalUsers--;
        socket.broadcast.emit('disconnected', {nickname: socket.id, text: 'has left', totalUsers: totalUsers})
    })
});  

server.listen(3000, () => {
    console.log('listening on *:3000');
});