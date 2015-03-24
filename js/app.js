(function(){
    'use strict';

    React.render(
        <TodoApp userPhoto={"placeholder"} source="http://localhost:3001/todos/1" />,
        document.getElementById('todoApp')
    );

    React.render(
        <NewTodo />,
        document.getElementById('commentPost')
    );


})();