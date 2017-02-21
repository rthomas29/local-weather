'use strict';
const express = require('express');
const app = express();

const pug = require('./pug.js');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (request, response) => {
	response.render('index', {title: pug.renderPug.title});
})

app.listen('3000', () => {
	console.log('listening on 3000');
})
