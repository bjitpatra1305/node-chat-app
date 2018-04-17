const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
var app = express();
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up and ruiing on port ${port}`);
});