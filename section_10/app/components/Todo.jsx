var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var Todo = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool
  },
  handleToggle: function(evt) {
    this.props.dispatch(actions.toggleTodo(this.props.id))
  },

  render: function() {
    var { text, completed, createdAt, completedAt } = this.props;
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

export default connect()(Todo);