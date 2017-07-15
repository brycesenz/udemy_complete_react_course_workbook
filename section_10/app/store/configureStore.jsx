var redux = require('redux');
var thunk = require('redux-thunk').default;
var { searchTextReducer, showCompletedReducer, todoReducer } = require('./../reducers/index');

export var configure = (initialState={}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer,
  })

  // The reducer is our object above which returns the new state.
  // redux.compose() lets us add different middleware
  //  Here we're adding in the Chrome Redux DevTools middleware
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => {
      return f;
    }
  ));

  return store;
}
