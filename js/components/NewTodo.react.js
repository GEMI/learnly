var React = require('react');
var TodoActions = require('../actions/TodoActions');

var NewTodo = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },
    handleChange : function(){
        this.setState({value: event.target.value});
    },
    saveComment: function () {
        console.log("Saving: ", this.state.value);
        TodoActions.saveTodo(this.state.value);
    },
    render: function () {
        return (
            <div className="input-group">
                <input className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Type TODO..." />
                <div className="input-group-btn">
                    <button className="btn btn-success" onClick={this.saveComment}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        );
    }
});

module.exports = NewTodo;