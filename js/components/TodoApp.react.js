var React = require('react');
var Todo = require('../components/Todo.react');
var TodoStore = require('../stores/TodoStore');

var TodoApp = React.createClass({
    propTypes: {
        source: React.PropTypes.string,
        userPhoto: React.PropTypes.string,
        todos: React.PropTypes.array
    },

    getInitialState: function () {
        return {
            todos: [],
            userPhoto: ""
        };
    },

    componentDidMount: function () {
        var that = this;
        TodoStore.addChangeListener(this._onChange);
        $.get(this.props.source, function (result) {
            var todos = result;
            if (that.isMounted()) {
                that.setState({
                    todos: todos
                });
            }
        });
    },

    componentWillUnmount: function () {
        TodoStore.removeChangeListener(this._onChange);
    },

    onChildClick: function () {
        //TODO update me?
        console.log(elem);
    },

    render: function () {
        var that = this;
        return (
            <ul className="todo-list ui-sortable">
                {this.state.todos.map(function (todo) {
                    var updateDate = moment.parseZone(todo.updated_at).format("YYYY-MM-DD HH:mm");
                    return <Todo username={todo.name}
                        note={todo.note}
                        onItemCheck={that.onChildClick}
                        updatedDate={updateDate}
                        completed={todo.completed}
                    />;
                })}
            </ul>
        );
    },

    _onChange: function () {
        //TODO update the component with new properties
        this.forceUpdate();
    }
});


module.exports = TodoApp;