var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('macha pondi ki podam 
   tipper ni ela ina oppiddam
   chill kotti enjoy cheddam 
   macha uday inka em visheshalu\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

