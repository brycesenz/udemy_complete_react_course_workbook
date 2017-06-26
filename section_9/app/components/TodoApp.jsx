var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
      showCompleted: false,
      todos: [
        { id: uuid(), text: 'Walk the dog.', completed: false },
        { id: uuid(), text: 'Clean the year.', completed: true  },
        { id: uuid(), text: 'Leave mail on porch.', completed: false  },
        { id: uuid(), text: 'Play games.', completed: false  }
      ]
    }
  },
  handleNewTodo: function(todoDescription) {
    this.setState({
      todos: [
        ...this.state.todos, 
        { id: uuid(), text: todoDescription, completed: false }
      ]
    });

    console.log("received new todo", todoDescription);
  },
  handleSearch: function(searchText, showCompleted) {
    console.log("received new search", searchText);
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },  
  handleTodoToggle: function(id) {
    console.log("HANDLING");
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function() {
    var {todos} = this.state;

    return (      
      <div className='todo-app'>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleTodoToggle} />
        <AddTodo onAddTodo={this.handleNewTodo} />
      </div>
    );    
  }
})

module.exports = TodoApp;