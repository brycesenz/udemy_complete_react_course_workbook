var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(evt) {
    evt.preventDefault();
    var todoDesc = this.refs.todoText.value;
    
    if (todoDesc.length > 0) {
      this.refs.todoText.value = '';
      this.props.dispatch(actions.addTodo(todoDesc));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (      
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do you need to do?"/>
          <button className="expanded button">Add Todo</button>
        </form>
      </div>
    );    
  }
})

export default connect()(AddTodo);
