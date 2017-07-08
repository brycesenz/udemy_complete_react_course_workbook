var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');

// load Foundation
$(document).foundation();

// app CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);

require('./redux-todo-example.jsx')