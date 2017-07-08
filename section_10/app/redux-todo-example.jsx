var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  searchText: '', 
  showCompleted: false, 
  todos: []
}
var nextTodoId = 1;

// var oldReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     case 'CHANGE_SEARCH_TEXT':
//       return {
//         ...state,
//         searchText: action.searchText
//       };
//     case 'ADD_TODO':
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: nextTodoId++,
//             todo: action.todo
//           }
//         ]
//       }
//     case 'REMOVE_TODO':
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => {
//           return todo.id !== action.id;
//         })
//       }
//     default:
//       return state;
//   }
// };

var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

var todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: nextTodoId++,
          todo: action.todo
        }
      ]
    case 'REMOVE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id;
      })
    default:
      return state;  
  }
}

var reducer = redux.combineReducers({
  searchText: searchTextReducer,
  todos: todoReducer
})

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
  type: 'ADD_TODO',
  todo: 'Eat lunch.'
});


store.dispatch({
  type: 'ADD_TODO',
  todo: 'Walk the dog.'
});

store.dispatch({
  type: 'ADD_TODO',
  todo: 'Go running.'
});

store.dispatch({
  type: 'REMOVE_TODO',
  id: 2
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'play'
});
