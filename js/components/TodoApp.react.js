var React = require('react');
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
        console.log("THIS THING WORKS!");
        TodoStore.addChangeListener(this._onChange);
        $.get(this.props.source, function (result) {
            var todos = result;
            if (this.isMounted()) {
                this.setState({
                    todos: todos
                });
            }
        }.bind(this));
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <ul className="todo-list ui-sortable">
                {this.state.todos.map(function (todo) {
                    var updateDate = moment.parseZone(todo.updated_at).format("YYYY-MM-DD HH:mm");
                    return <Todo username={todo.name} note={todo.note} updatedDate={updateDate} />;
                })}
            </ul>
        );
    },

    _onChange: function() {
        this.setState(getTodoState());
    }
});

var Todo = React.createClass({
    propTypes: {
        username: React.PropTypes.string,
        updatedDate: React.PropTypes.string,
        note: React.PropTypes.string
    },

    render: function () {
        return (
            <li>
                <div className="icheckbox_minimal" aria-checked="false" aria-disabled="false">
                    <input type="checkbox" value="" name=""/>
                </div>
                <p className="text">
                    {this.props.username} - {this.props.note}
                    <span> {this.props.updatedDate} </span>
                </p>
                <div className="tools">
                    <i className="fa fa-edit"></i>
                    <i className="fa fa-trash-o"></i>
                </div>
            </li>
        );
    }

});