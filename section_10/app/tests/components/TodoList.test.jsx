var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('render', () => {
    it('should render exactly the number of todos', () => {
      var todos = [
        {id: 1, text: "Todo 1", completed: false, completedAt: undefined, createdAt: 500},
        {id: 2, text: "Todo 2", completed: false, completedAt: undefined, createdAt: 500}
      ];

      var store = configure({
        todos
      });

      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList/>
        </Provider>
      );

      var todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
      var renderedTodos = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)
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

