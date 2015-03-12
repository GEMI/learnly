/**
 * Created by Silky on 2015.03.11.
 */
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now }
});

// Create a static getTweets method to return tweet data from the db
TaskSchema.statics.getTodos = function(page, skip, callback) {

    var tasks = [],
        start = (page * 10) + (skip * 1);

    // Query the db, using skip and limit to achieve page chunks
    Task.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){

        // If everything is cool...
        if(!err) {
            tasks = docs;  // We got tweets
            tasks.forEach(function(task){
                task.active = true; // Set them to active
            });
        }

        // Pass them back to the specified callback
        callback(tasks);

    });

};

module.exports = Task = mongoose.model('Task', TaskSchema);