var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  searchText: '', 
  showCompleted: false, 
  todos: []
}

var reducer = (state = stateDefault, action) => {
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

// The reducer is our object above which returns the new state.
// redux.compose() lets us add different middleware
//  Here we're adding in the Chrome Redux DevTools middleware
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => {
    return f;
  }
));

// subscribe to changes
// Note: I know it's super weird to name the subscription 'unsubscribe',
//  but it lets us unsubscribe in the future by running `unsubscribe();` 
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New state is', state);
  document.getElementById('app').innerHTML = state.searchText;
})


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

//  Just leaving this here to show that it works
// unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'play'
});

// var store = redux.createStore(reducer, redux.compose);




// // Returns search text matching our string 'work'
// store.dispatch(action)