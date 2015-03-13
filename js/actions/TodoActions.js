/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {

    create: function (text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },
    init: function (text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_INIT,
            text: text
        });
    },
    updateText: function (id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        });
    },
    toggleComplete: function (todo) {
        var id = todo.id;
        if (todo.complete) {
            AppDispatcher.dispatch({
                actionType: TodoConstants.TODO_UNDO_COMPLETE,
                id: id
            });
        } else {
            AppDispatcher.dispatch({
                actionType: TodoConstants.TODO_COMPLETE,
                id: id
            });
        }
    },
    toggleCompleteAll: function () {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        });
    },
    destroy: function (id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    },
    destroyCompleted: function () {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY_COMPLETED
        });
    }

};

module.exports = TodoActions;