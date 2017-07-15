var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');

var TodoApp = require('TodoApp');

var store = require('configureStore').configure();
var actions = require('actions');

store.subscribe(() => {
  console.log('state', store.getState());
});

store.dispatch(actions.addTodo('Eat breakfast!'));
store.dispatch(actions.changeSearchText('boogie'));
store.dispatch(actions.toggleShowCompleted());

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
