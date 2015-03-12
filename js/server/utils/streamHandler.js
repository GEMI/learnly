var Task = require('../models/Task');

module.exports = function(stream, io){

    stream.on('data', function(data) {

        // Construct a new tweet object
        var task = {
            name: data.name,
            completed: data.completed,
            note: data.note,
            updated_at: { type: Date, default: Date.now }
        };

        // Create a new model instance with our object
        var taskEntry = new Task(task);

        taskEntry.save(function(err) {
            if (!err) {
                // If everything is cool, socket.io emits the tweet.
                io.emit('task', task);
            }
        });

    });

};