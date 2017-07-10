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
    expect(reducers.showCompletedReducer(false, action)).toEqual(true);
    expect(reducers.showCompletedReducer(true, action)).toEqual(false);
  });
});
