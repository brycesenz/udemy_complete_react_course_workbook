var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos)
    } catch (error) {
    }

    return $.isArray(todos) ? todos : []
  },
  filterTodos: function(todos, searchString, showCompleted) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !(todo.completed) || (showCompleted)
    });

    //filter by searchString (case irrespective)
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchString.toLowerCase())
    });

    //sort output
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}