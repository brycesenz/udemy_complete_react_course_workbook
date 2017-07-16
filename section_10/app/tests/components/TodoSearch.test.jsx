var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('handleSearch', () => {
    it('should dispatch CHANGE_SEARCH_TEXT with input text', () => {
      var spy = expect.createSpy();
      var action = {
        type: 'CHANGE_SEARCH_TEXT',
        searchText: 'walk'
      }

      var form = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      form.refs.searchText.value = 'Walk';
      TestUtils.Simulate.change(form.refs.searchText)
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED with change in showCompleted', () => {
      var spy = expect.createSpy();
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var form = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(form));

      TestUtils.Simulate.change(form.refs.showCompleted)
      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});

