var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default Message'
    }
  },
  onButtonClick: function(evt) {
    evt.preventDefault();
    var name = this.refs.name;
    alert('You typed ' + name.value);
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name'></input>
          <button>Submit Me</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Bryce';
var message = 'Udemy is well built';

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
