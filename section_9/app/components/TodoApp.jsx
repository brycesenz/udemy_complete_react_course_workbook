var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
      showCompleted: false,
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleNewTodo: function(todoDescription) {
    this.setState({
      todos: [
        ...this.state.todos, 
        { 
          id: uuid(), 
          text: todoDescription, 
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch: function(searchText, showCompleted) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },  
  handleTodoToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined
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
    var {todos, searchText, showCompleted} = this.state;
    var foundTodos = TodoAPI.filterTodos(todos, searchText, showCompleted);

    return (      
      <div className='todo-app'>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={foundTodos} onToggle={this.handleTodoToggle} />
        <AddTodo onAddTodo={this.handleNewTodo} />
      </div>
    );    
  }
})

module.exports = TodoApp;