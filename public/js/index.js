var socket = io();
socket.on('connect', () => {
    console.log('Connected to server');
});
socket.on('disconnect', () => {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(message){
    console.log(message)
});

