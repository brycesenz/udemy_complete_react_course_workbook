var React = require('react');

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
    var {text, completed} = this.props;

    return (      
      <div className="todo" onClick={this.handleToggle}>
        <label>
          <input type="checkbox" ref="completed" checked={completed} onChange={this.handleToggle}/>
          {text}
        </label>
      </div>
    );    
  }
})

module.exports = Todo;