var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('handleSearch', () => {
    it('should call handleSearch with input text', () => {
      var spy = expect.createSpy();

      var form = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.searchText.value = 'Walk';
      TestUtils.Simulate.change(form.refs.searchText)
      expect(spy).toHaveBeenCalledWith('Walk', false);
    });

    it('should call handleSearch with change in showCompleted', () => {
      var spy = expect.createSpy();

      var form = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.searchText.value = 'Walk';
      form.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(form.refs.showCompleted)
      expect(spy).toHaveBeenCalledWith('Walk', true);
    });
  });
});

