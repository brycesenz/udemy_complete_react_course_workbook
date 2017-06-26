var React = require('react');

var AddTodo = React.createClass({
  getDefaultProps: function() {
  },
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },
  onSubmit: function(evt) {
    evt.preventDefault();
    var todoDesc = this.refs.description.value;
    console.log('submitting', todoDesc);
    
    if (todoDesc.length > 0) {
      this.refs.description.value = '';
      this.props.onSubmit(todoDesc);
    }
  },
  render: function() {
    return (      
      <div className='add-todo'>
        <form onSubmit={this.onSubmit}>
          <input ref="description" type="text" placeholder="What do you need to do?"/>
          <button className="expanded button">Add Todo</button>
        </form>
      </div>
    );    
  }
})

module.exports = AddTodo;