var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

import AddTodo from 'AddTodo';
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
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = TodoApp;
