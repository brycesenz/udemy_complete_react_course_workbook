var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var store = require('configureStore').configure();
var actions = require('actions');

store.subscribe(() => {
  var state = store.getState();
  console.log('state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// load Foundation
$(document).foundation();

// app CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
