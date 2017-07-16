var React = require('react');
var { connect } = require('react-redux');

var TodoAPI = require('TodoAPI');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todos, searchText, showCompleted} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className='container__message'>Nothing to do!</p>
        );
      } else {
        return TodoAPI.filterTodos(todos, searchText, showCompleted).map((todo) => {
          return (
            <Todo key={todo.id} {...todo} />
          );
        });
      }
    };

    return (
      <div className='todo-list'>
        {renderTodos()}
      </div>
    );
  }
})

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
