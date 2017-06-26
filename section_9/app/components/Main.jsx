var React = require('react');
var TodoApp = require('TodoApp');

var Main = (props) => {
  return (
    <div>
      <div className='row'>
        <div className='columns medium-6 large-4 small-centered'>
          <h1 className="page-title">Todo App</h1>
          <TodoApp/>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;