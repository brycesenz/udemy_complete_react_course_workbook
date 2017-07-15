var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoSearch = require('TodoSearch');
var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');

import TodoList from 'TodoList';

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
  render: function() {
    var {todos, searchText, showCompleted} = this.state;
    var foundTodos = TodoAPI.filterTodos(todos, searchText, showCompleted);

    return (
      <div className='todo-app'>
        <h1 className="page-title">Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList/>
              <AddTodo onAddTodo={this.handleNewTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = TodoApp;
