var express = require('express');

// Create our app
var app = express();
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Your Udemy Workbook server is live on port 3000 (localhost:3000)');
});