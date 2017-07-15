var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// Have to use destructuring to get the non-default version (that doesn't use Redux)
var {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  describe('render', () => {
    it('should render the Todo correctly', () => {
      var todo = TestUtils.renderIntoDocument(<Todo id={4} text="Dummy Todo."/>);
 
      var $el = $(ReactDOM.findDOMNode(todo));
      var actualText = $el.find('.todo-description').text();
      expect(actualText).toInclude('Dummy Todo.')
    });
  });

  describe('handleToggle', () => {
    it('should dispatch TOGGLE_TODO action on click', () => {
      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo id={4} text="Dummy Todo." completed={false} dispatch={spy}/>);
 
      todo.refs.completed.checked = true;
      TestUtils.Simulate.change(todo.refs.completed)
      expect(spy).toHaveBeenCalledWith({
        type: 'TOGGLE_TODO',
        id: 4
      });
    });
  });
});

