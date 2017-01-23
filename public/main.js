$(document).ready(function() {
    var socket = io();
    var input = $('input');
    var messages = $('#messages');

    var addMessage = function(message) {
        messages.append('<div>' + message + '</div>');
    };

    input.on('keydown', function(event) {
        if (event.keyCode != 13) {
            return;
        }

        var message = input.val();
        addMessage(message);
        socket.emit('message', message);
        input.val('');
    });

    socket.on('message', addMessage);
});

//Broadcast and display a message to connected users when someone connects or disconnects

//Display a count of how many users are connected

//Add support for nicknames

//Add "{user} is typing" functionality

//Show who's online

//Add private messaging