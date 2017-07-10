var expect = require('expect');
var reducers = require('reducers');

describe('Reducers', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'CHANGE_SEARCH_TEXT',
      searchText: 'my dummy search'
    };
    expect(reducers.searchTextReducer('', action)).toEqual('my dummy search');
  });
});