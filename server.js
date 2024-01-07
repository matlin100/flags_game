const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const router = require('./src/routes/flagRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use('/', router); // Or use '/flags' if specific to flag routes
app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
