var React = require('react');

var Todo = React.createClass({
  getDefaultProps: function() {
    completionStatus: false
  },
  propTypes: {
    text: React.PropTypes.string.isRequired,
    completionStatus: React.PropTypes.bool
  },
  render: function() {
    var {id, text} = this.props;

    return (      
      <div className="todo">
        <p className="todo-text">{id}. {text}</p>
      </div>
    );    
  }
})

module.exports = Todo;