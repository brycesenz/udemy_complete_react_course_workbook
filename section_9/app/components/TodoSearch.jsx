var React = require('react');

var TodoSearch = React.createClass({
  getDefaultProps: function() {
  },
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },
  handleSearch: function(evt) {
    evt.preventDefault();

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
        <div>
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