var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool,
    onToggle: React.PropTypes.func
  },
  handleToggle: function(evt) {
    var id = this.props.id
    var completed = this.refs.completed.checked;
    this.props.onToggle(id);
  },
  render: function() {
    var {text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'

    var renderDate = () => {
      var message = completed ? 'Completed: ' : 'Created: ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (      
      <div className={todoClassName} onClick={this.handleToggle}>
        <div>
          <input type="checkbox" ref="completed" checked={completed} onChange={this.handleToggle}/>
        </div>
        <div className='todo-description'>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );    
  }
})

module.exports = Todo;