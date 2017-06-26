var React = require('react');

var AddTodo = React.createClass({
  getDefaultProps: function() {
  },
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  handleSubmit: function(evt) {
    evt.preventDefault();
    var todoDesc = this.refs.todoText.value;
    
    if (todoDesc.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoDesc);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (      
      <div className='add-todo'>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do you need to do?"/>
          <button className="expanded button">Add Todo</button>
        </form>
      </div>
    );    
  }
})

module.exports = AddTodo;