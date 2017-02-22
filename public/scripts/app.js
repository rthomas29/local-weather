const express = require('express');
const pug = require('./pug.js');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index', { title: pug.renderPug.title });
});

app.listen('3000');
