var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('handleSubmit', () => {
    it('should dispatch ADD_TODO with todo input', () => {
      var spy = expect.createSpy();
      var action = {
        type: 'ADD_TODO',
        text: 'Walk my dog'
      }

      var form = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.todoText.value = 'Walk my dog';
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO with empty input', () => {
      var spy = expect.createSpy();

      var form = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.todoText.value = '';
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toNotHaveBeenCalled();
    });
  });
});

