/**
 * Created by Silky on 2015.03.13.
 */
var TodoActions = require("../../actions/TodoActions");
var Task = require("../models/Task");

var TodoAPI = {
    initTodos: function(data){
        TodoActions.init(data)
    }
};

module.exports = TodoAPI;