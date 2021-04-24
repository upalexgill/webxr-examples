const express = require('express');
const fs = require('fs')
const https = require('https')
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port: ' + app.get('port'));
  }
})
