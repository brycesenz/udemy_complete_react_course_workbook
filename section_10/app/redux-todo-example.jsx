var redux = require('redux');

console.log('starting redux example');

// searchText reducer and action generators
//-------------------------------------
var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

var changeSearchText = (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  }
}

// todo reducer and action generators
//-------------------------------------
var nextTodoId = 1;
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

var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }  
}

var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
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


store.dispatch(changeSearchText('work'));

//  Just leaving this here to show that it works
// unsubscribe();

store.dispatch(addTodo('Eat lunch.'));

store.dispatch(addTodo('Walk the dog.'));

store.dispatch(addTodo('Go running.'));

store.dispatch(removeTodo(2));

store.dispatch(changeSearchText('play'));
