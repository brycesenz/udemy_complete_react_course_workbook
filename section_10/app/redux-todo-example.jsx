console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

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


store.dispatch(actions.changeSearchText('work'));

//  Just leaving this here to show that it works
// unsubscribe();

store.dispatch(actions.addTodo('Eat lunch.'));

store.dispatch(actions.addTodo('Walk the dog.'));

store.dispatch(actions.addTodo('Go running.'));

store.dispatch(actions.removeTodo(2));

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeSearchText('play'));
