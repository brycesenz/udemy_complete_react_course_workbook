var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });


  describe('handleNewTodo', () => {
    it('should add Todo', () => {
      var app = TestUtils.renderIntoDocument(<TodoApp />);

      app.setState({todos: []});
      app.handleNewTodo('My newest todo');
      expect(app.state.todos.length).toEqual(1);
      expect(app.state.todos[0].text).toEqual('My newest todo');
      expect(app.state.todos[0].createdAt).toBeA('number');
      expect(app.state.todos[0].completedAt).toEqual(undefined);
    });
  });

  describe('handleTodoToggle', () => {
    it('should update todos, changing status of toggled one', () => {
      var app = TestUtils.renderIntoDocument(<TodoApp />);
      var dummyTodos = [
        {id: 1, text: "Walk the dog.", completed: false},
        {id: 2, text: "Do homework.", completed: true},
        {id: 3, text: "Make my bed.", completed: false},
        {id: 4, text: "Workout.", completed: false},
      ]

      app.setState({todos: dummyTodos});

      app.handleTodoToggle(3);
      expect(app.state.todos[2].completed).toEqual(true);
      expect(app.state.todos[2].completedAt).toBeA('number');

      app.handleTodoToggle(3);
      expect(app.state.todos[2].completed).toEqual(false);
      expect(app.state.todos[2].completedAt).toEqual(undefined);
    });
  });
});

