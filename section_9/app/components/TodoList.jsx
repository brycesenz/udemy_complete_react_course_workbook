var React = require('react');
var Todo = require('Todo');
//        <Todo key={todo.id}/>

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div className='todo-list'>
        {renderTodos()}
      </div>
    );    
  }
})

module.exports = TodoList;