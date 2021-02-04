const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

io.on('connection', socket => {
	console.log('a user connected');

	socket.broadcast.emit('hi');

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	socket.on('chatMessage', msg => {
		io.emit('chat message', msg);
	});
});

http.listen(5500, () => {
	console.log('listening on *:3000');
});
