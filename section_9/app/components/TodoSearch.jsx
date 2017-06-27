var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(evt) {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(searchText, showCompleted);
  },
  render: function() {
    return (      
      <div className='todo-search'>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
        </div>
        <div onClick={this.handleSearch}>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show Completed Todos
          </label>
        </div>
      </div>
    );    
  }
})

module.exports = TodoSearch;