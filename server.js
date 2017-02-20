const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});


app.listen(port);
console.log('server started at: ', port);
