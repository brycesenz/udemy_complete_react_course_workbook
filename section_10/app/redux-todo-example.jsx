var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  searchText: '', 
  showCompleted: false, 
  todos: []
}

var reducer = (state = stateDefault, action) => {
  console.log('New action', action);

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
};

store.dispatch(action);
var currentState = store.getState();
console.log("search text = ", currentState.searchText)

// var store = redux.createStore(reducer, redux.compose);

// // subscribe to changes

// store.subscribe(() => {
//   var state = store.getState();

//   console.log('Name is', state.name);
// })



// // Returns search text matching our string 'work'
// store.dispatch(action)