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
            <ul className="todo-list ui-sortable">
                {this.state.todos.map(function (todo) {
                    return <Todo username={todo.name} note={todo.note} updatedDate={todo.updated_at} />;
                })}
            </ul>
        );
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
                <span className="handle">
                    <i className="fa fa-ellipsis-v"></i>
                    <i className="fa fa-ellipsis-v"></i>
                </span>
                <div className="icheckbox_minimal" aria-checked="false" aria-disabled="false">
                    <input type="checkbox" value="" name=""/>
                </div>
                <p className="text">
                    {this.props.username} - {this.props.note}
                    <span> {this.props.updatedDate} </span>
                </p>
                <small className="label label-danger">
                    <i className="fa fa-clock-o"></i>
                    2 mins
                </small>
                <div className="tools">
                    <i className="fa fa-edit"></i>
                    <i className="fa fa-trash-o"></i>
                </div>
            </li>
        );
    }

});