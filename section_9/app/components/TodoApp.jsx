var React = require('react');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  handleNewTodo: function(todoDescription) {
    console.log("received new todo", todoDescription);
  },
  render: function() {
    return (      
      <div className='todo-app'>
        <AddTodo onSubmit={this.handleNewTodo}/>
      </div>
    );    
  }
})

module.exports = AddTodo;