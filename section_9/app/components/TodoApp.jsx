var React = require('react');
var AddTodo = require('AddTodo');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        { id: 1, text: 'Walk the dog.' },
        { id: 2, text: 'Clean the year.' },
        { id: 3, text: 'Leave mail on porch.' },
        { id: 4, text: 'Play games.' }
      ]
    }
  },
  handleNewTodo: function(todoDescription) {
    console.log("received new todo", todoDescription);
  },
  render: function() {
    var {todos} = this.state;

    return (      
      <div className='todo-app'>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleNewTodo} />
      </div>
    );    
  }
})

module.exports = TodoApp;