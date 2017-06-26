var React = require('react');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
      showCompleted: false,
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