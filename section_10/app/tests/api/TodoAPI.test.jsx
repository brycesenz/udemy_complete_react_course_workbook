var expect = require('expect');
var $ = require('jQuery');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var arrayTodos = [
        { id: 1, text: "Todo 1", completed: false },
        { id: 87, text: "Todo 2", completed: true }
      ]; 

      TodoAPI.setTodos(arrayTodos);

      var storedTodos = localStorage.getItem('todos');
      var parsedTodos = JSON.parse(storedTodos);

      expect(parsedTodos).toEqual(arrayTodos);
    });

    it('should not set valid todos array', () => {
      localStorage.setItem('todos', "previous value");

      var invalidTodos = { id: 1, text: "Todo 1", completed: false };

      TodoAPI.setTodos(invalidTodos);
      expect(localStorage.getItem('todos')).toEqual("previous value");
    });
  });

  describe('getTodos', () => {
    it('should get todos when it is a stored array', () => {
      var arrayTodos = [
        { id: 1, text: "Todo 1", completed: false },
        { id: 87, text: "Todo 2", completed: true }
      ];

      localStorage.setItem('todos', JSON.stringify(arrayTodos));

      var fetchedTodos = TodoAPI.getTodos();
      expect(fetchedTodos).toEqual(arrayTodos);
    });

    it('should return empty array when stored todos is not an array', () => {
      var invalidTodos = "invalid data";

      localStorage.setItem('todos', invalidTodos);

      var fetchedTodos = TodoAPI.getTodos();
      expect(fetchedTodos).toEqual([]);
    });
  });

  describe('filterTodos', () => {
    var arrayTodos = [
      { id: 1, text: "Cook dinner", completed: false },
      { id: 3, text: "Other thing", completed: true },
      { id: 15, text: "Walk my dog", completed: false },
      { id: 22, text: "Feed my cat", completed: false },
      { id: 87, text: "Water my plant", completed: true }
    ];

    it('should get todos according to filter params with showCompleted', () => {
      var fetchedTodos = TodoAPI.filterTodos(arrayTodos, '', true);
      var expectedTodos = [
        { id: 1, text: "Cook dinner", completed: false },
        { id: 15, text: "Walk my dog", completed: false },
        { id: 22, text: "Feed my cat", completed: false },
        { id: 3, text: "Other thing", completed: true },
        { id: 87, text: "Water my plant", completed: true }
      ];

      expect(fetchedTodos).toEqual(expectedTodos);
    });

    it('should get todos according to filter params with showCompleted', () => {
      var fetchedTodos = TodoAPI.filterTodos(arrayTodos, '', false);
      var expectedTodos = [
        { id: 1, text: "Cook dinner", completed: false },
        { id: 15, text: "Walk my dog", completed: false },
        { id: 22, text: "Feed my cat", completed: false }
      ];

      expect(fetchedTodos).toEqual(expectedTodos);
    });

    it('should get todos according to filter params with searchString', () => {
      var fetchedTodos = TodoAPI.filterTodos(arrayTodos, 'my', true);
      var expectedTodos = [
        { id: 15, text: "Walk my dog", completed: false },
        { id: 22, text: "Feed my cat", completed: false },
        { id: 87, text: "Water my plant", completed: true }
      ];

      expect(fetchedTodos).toEqual(expectedTodos);
    });

    it('should get todos according to filter params with searchString (using start of the string)', () => {
      var fetchedTodos = TodoAPI.filterTodos(arrayTodos, 'Wa', true);
      var expectedTodos = [
        { id: 15, text: "Walk my dog", completed: false },
        { id: 87, text: "Water my plant", completed: true }
      ];

      expect(fetchedTodos).toEqual(expectedTodos);
    });
  });
});

