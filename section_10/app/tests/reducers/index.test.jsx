var expect = require('expect');

// Wrapping things in df 'freezes' them,
//  so that if they are altered in any way by the function
//  that they go into, the tests will fail.  This ensures idempotence.
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  it('should handle CHANGE_SEARCH_TEXT action', () => {
    var action = {
      type: 'CHANGE_SEARCH_TEXT',
      searchText: 'my dummy search'
    };
    expect(reducers.searchTextReducer(df(''), df(action))).toEqual('my dummy search');
  });

  it('should flip show completed status', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    expect(reducers.showCompletedReducer(df(false), df(action))).toEqual(true);
    expect(reducers.showCompletedReducer(df(true), df(action))).toEqual(false);
  });


  it('should have todoReducer that handles adding', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'walk the dog.'
    };

    var newState = reducers.todoReducer(df([]), df(action));
    expect(newState.length).toEqual(1);
    var lastItem = newState[0];
    expect(lastItem).toIncludeKeys(['id', 'text', 'completed', 'completedAt', 'createdAt']);
    expect(lastItem).toContain({ text: 'walk the dog.' });
    expect(lastItem).toContain({ completedAt: undefined });
    expect(lastItem).toContain({ completed: false });
  });

  it('should have todoReducer that handles removing', () => {
    var action = {
      type: 'REMOVE_TODO',
      id: 1435
    };

    var initialState = [
      {id: 1435, text: 'dummy'}
    ];

    var newState = reducers.todoReducer(df(initialState), df(action));
    expect(newState.length).toEqual(0);
  });

  it('should have todoReducer that handles toggling', () => {
    var action_1 = {
      type: 'TOGGLE_TODO',
      id: 1435
    };

    var action_2 = {
      type: 'TOGGLE_TODO',
      id: 1221
    };

    var initialState = [
      {
        id: 1435,
        text: 'dummy 1',
        completed: true,
        completedAt: 'some time'
      },
      {
        id: 1221,
        text: 'dummy 2',
        completed: false,
        completedAt: undefined
      }
    ];

    // toggling from true to false
    var newState = reducers.todoReducer(df(initialState), df(action_1));
    expect(newState.length).toEqual(2);
    var firstItem = newState[0];
    expect(firstItem.completed).toEqual(false);
    expect(firstItem.completedAt).toEqual(undefined);

    // toggling from false to true
    var newState = reducers.todoReducer(df(initialState), df(action_2));
    expect(newState.length).toEqual(2);
    var lastItem = newState[1];
    expect(lastItem.completed).toEqual(true);
    expect(lastItem.completedAt).toNotEqual(undefined);
  });
});
