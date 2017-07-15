var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'CHANGE_SEARCH_TEXT',
      searchText: 'my dummy search'
    };
    expect(actions.changeSearchText('my dummy search')).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    expect(actions.toggleShowCompleted()).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'walk dog'
    };
    expect(actions.addTodo('walk dog')).toEqual(action);
  });

  it('should generate remove todo action', () => {
    var action = {
      type: 'REMOVE_TODO',
      id: 7
    };
    expect(actions.removeTodo(7)).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 7
    };
    expect(actions.toggleTodo(7)).toEqual(action);
  });
});