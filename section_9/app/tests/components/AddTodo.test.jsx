var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('onSubmit', () => {
    it('should call onSubmit with todo input', () => {
      var spy = expect.createSpy();

      var form = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.description.value = 'Walk my dog';
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toHaveBeenCalledWith('Walk my dog');
    });

    it('should not call onSubmit with empty input', () => {
      var spy = expect.createSpy();

      var form = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.description.value = '';
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toNotHaveBeenCalled();
    });
  });
});

