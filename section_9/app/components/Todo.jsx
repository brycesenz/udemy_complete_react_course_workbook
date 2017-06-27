var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool,
    onToggle: React.PropTypes.func
  },
  handleToggle: function(evt) {
    evt.preventDefault();

    var id = this.props.id
    var completed = this.refs.completed.checked;
    this.props.onToggle(id);
  },
  render: function() {
    var {text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = completed ? 'Completed: ' : 'Created: ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (      
      <div className="todo" onClick={this.handleToggle}>
        <label>
          <input type="checkbox" ref="completed" checked={completed} onChange={this.handleToggle}/>
          <p>{text}</p>
          <p>{renderDate()}</p>
        </label>
      </div>
    );    
  }
})

module.exports = Todo;