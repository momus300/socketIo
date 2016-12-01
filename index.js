var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
        io.emit('chatWiadomosc', 'Hi all! :)');
    socket.on('chatWiadomosc', function(msg){
        io.emit('chatWiadomosc', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
