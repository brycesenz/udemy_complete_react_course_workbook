var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  describe('render', () => {
    it('should render the Todo correctly', () => {
      var todo = TestUtils.renderIntoDocument(<Todo id={4} text="Dummy Todo."/>);
 
      var $el = $(ReactDOM.findDOMNode(todo));
      var actualText = $el.find('.todo-text').text();
      expect(actualText).toEqual('4. Dummy Todo.')
    });
  });
});

