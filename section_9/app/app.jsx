var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

// load Foundation
$(document).foundation();

// app CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
