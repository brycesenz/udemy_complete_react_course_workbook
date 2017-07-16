var React = require('react');
var { connect } = require('react-redux');

var actions = require('actions');

export var TodoSearch = React.createClass({
  handleSearch: function(evt) {
    var searchText = this.refs.searchText.value;
    this.props.dispatch(actions.changeSearchText(searchText.toLowerCase()));
  },
  handleShowCompletedToggle: function(evt) {
    this.props.dispatch(actions.toggleShowCompleted());
  },
  render: function() {
    var {showCompleted, searchText} = this.props;

    return (      
      <div className='container__header'>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.handleShowCompletedToggle}/>
            Show Completed Todos
          </label>
        </div>
      </div>
    );    
  }
})

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);