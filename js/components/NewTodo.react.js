/**
 * Created by Silky on 2015.03.24.
 */
var NewTodo = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },
    handleChange : function(){
        this.setState({value: event.target.value});
    },
    saveComment: function () {
        $.ajax({
            type: "POST",
            url: "/todos/",
            data: {message: this.state.value},
            success: function(result){
                //TODO implement flux
                //trigger app update
            }
        });
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