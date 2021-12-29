var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('macha pondi ki podam , tipper ni oppinchi pondin ki velli chill kodadam!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

