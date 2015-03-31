var React = require('react');

var Todo = React.createClass({
    propTypes: {
        username: React.PropTypes.string,
        updatedDate: React.PropTypes.string,
        note: React.PropTypes.string,
        completed: React.PropTypes.bool,
        onItemCheck: React.PropTypes.func
    },
    render: function () {
        return (
            <li>
                <div className="icheckbox_minimal" aria-checked="false" aria-disabled="false">
                    <input type="checkbox"
                        defaultChecked={this.props.completed}
                        ref="complete"
                        onChange={this.props.onItemCheck}
                        value="" name=""/>
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

});/**
 * Created by Silky on 2015.03.25.
 */

module.exports = Todo;