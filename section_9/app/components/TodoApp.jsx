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
        { id: uuid(), text: 'Walk the dog.' },
        { id: uuid(), text: 'Clean the year.' },
        { id: uuid(), text: 'Leave mail on porch.' },
        { id: uuid(), text: 'Play games.' }
      ]
    }
  },
  handleNewTodo: function(todoDescription) {
    this.setState({
      todos: [
        ...this.state.todos, 
        { id: uuid(), text: todoDescription }
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
  render: function() {
    var {todos} = this.state;

    return (      
      <div className='todo-app'>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleNewTodo} />
      </div>
    );    
  }
})

module.exports = TodoApp;