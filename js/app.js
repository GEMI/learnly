var React = require('react');

var TodoApp = require('./components/TodoApp.react');

React.render(
    <TodoApp userPhoto={"placeholder"} source="http://localhost:3001/todos/1" />,
    document.getElementById('todoApp')
);

React.render(
    <NewTodo />,
    document.getElementById('commentPost')
);