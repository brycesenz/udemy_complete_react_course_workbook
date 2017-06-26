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
    });
  });
});

