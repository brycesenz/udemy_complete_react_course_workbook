var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('render', () => {
    it('should render exactly the number of todos', () => {
      var todos = [
        {id: 1, text: "Todo 1"},
        {id: 2, text: "Todo 2"}
      ];


      var list = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var renderedTodos = TestUtils.scryRenderedComponentsWithType(list, Todo)
      expect(renderedTodos.length).toEqual(2);
    });

    it('should render message with no todos', () => {
      var todos = [];

      var list = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
      var renderedTodos = TestUtils.scryRenderedComponentsWithType(list, Todo)
      expect(renderedTodos.length).toEqual(0);

      var $el = $(ReactDOM.findDOMNode(list));
      var actualText = $el.find('.container__message').text();
      expect(actualText).toEqual('Nothing to do!')
    });
  });
});

