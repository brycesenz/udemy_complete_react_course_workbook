var redux = require('redux');
var axios = require('axios');

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

// map reducer and action generators
//-------------------------------------
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      }
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state;
  }
}

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io').then((res) => {
    var loc = res.data.loc;
    console.log('fetching loc', loc)
    var baseUrl = 'http://maps.google.com?q=';
    store.dispatch(completeLocationFetch(baseUrl + loc));
  })
}

var reducer = redux.combineReducers({
  searchText: searchTextReducer,
  todos: todoReducer,
  map: mapReducer
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

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'LOADING';
  }
  else {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View your location</a>';
  }
})


store.dispatch(changeSearchText('work'));

//  Just leaving this here to show that it works
// unsubscribe();

store.dispatch(addTodo('Eat lunch.'));

store.dispatch(addTodo('Walk the dog.'));

store.dispatch(addTodo('Go running.'));

store.dispatch(removeTodo(2));

store.dispatch(fetchLocation());

store.dispatch(changeSearchText('play'));
