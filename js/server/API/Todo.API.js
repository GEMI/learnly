/**
 * Created by Silky on 2015.03.13.
 */
var TodoActions = require("TodoActions");
var Task = require("Task");

var TodoAPI = {
    initTodos: function(data){
        TodoActions.init(data)
    }
};

module.exports = TodoAPI;