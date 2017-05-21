var GreeterMessage = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default Message'
    }
  },
  render: function () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(evt) {
    evt.preventDefault();

    var updates = {};

    var nameRef = this.refs.name
    if (nameRef.value.length > 0) { 
      updates['name'] = nameRef.value;
      nameRef.value = '';
    }

    var messageRef = this.refs.message
    if (messageRef.value.length > 0) { 
      updates['message'] = messageRef.value;
      messageRef.value = '';
    }

    this.props.onUpdates(updates);
  },

  render: function () {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type='text' placeholder='Enter name' ref='name'></input>
        </div>
        <div>
          <textarea placeholder='Enter message' ref='message'></textarea>
        </div>
        <button>Submit Me</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default Message'
    }
  },
  getInitialState: function() { 
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleUpdates: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return(
      <div>
        <GreeterMessage name={name} message = {message} />
        <GreeterForm onUpdates={this.handleUpdates} />
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
