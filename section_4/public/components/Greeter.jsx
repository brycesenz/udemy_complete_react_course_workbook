var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter;