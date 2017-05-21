var React = require('react');

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

module.exports = GreeterForm;