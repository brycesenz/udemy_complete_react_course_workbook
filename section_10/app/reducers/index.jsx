var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
}

export var todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    case 'ADD_TODOS':
      var newTodos = action.todos.map((todo) => {
        return {
          id: todo.id,
          text: todo.text,
          completed: todo.completed,
          createdAt: todo.createdAt,
          completedAt: todo.completedAt
        }
      });
      return [
        ...state,
        ...newTodos
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: todo.completed ? undefined : moment().unix()
          }
        } else {
          return todo;
        }
      });
    case 'REMOVE_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id;
      })
    default:
      return state;
  }
}

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
