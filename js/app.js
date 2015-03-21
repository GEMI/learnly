(function(){
    'use strict';

    React.render(
        <TodoApp userPhoto={getPhoto()} source="http://localhost:3001/todos/1" />,
        document.getElementById('todoApp')
    );

    function getPhoto(){
        return "Gedas";
    }

})();