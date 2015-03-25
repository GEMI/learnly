/**
 * Created by Silky on 2015.03.11.
 */
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: {type: Date, default: Date.now}
});

TaskSchema.statics.getTodos = function (callback) {

    Task.find(function (err, todos) {
        if (err) {
            console.error(err);
        } else {
            callback(todos);
        }
    });
};

module.exports = Task = mongoose.model('Task', TaskSchema);