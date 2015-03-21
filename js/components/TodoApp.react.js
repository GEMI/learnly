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
        $.get(this.props.source, function (result) {
            var todos = result;
            if (this.isMounted()) {
                this.setState({
                    todos: todos
                });
            }
        }.bind(this));
    },

    render: function () {
        return (
            <ul className="list-group" >
                {this.state.todos.map(function (todo) {
                    return <Todo username={todo.name} updatedDate={todo.updated_at} />;
                })}
            </ul>
        );
    }
});

var Todo = React.createClass({
    propTypes: {
        username: React.PropTypes.string,
        updatedDate: React.PropTypes.string
    },
    render: function () {
        return (
            <li className="list-group-item list-group-item-success">{this.props.username} +++ {this.props.updatedDate}</li>
        );
    }
});
