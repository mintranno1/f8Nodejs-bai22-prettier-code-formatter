const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = 8000;

const route = require('./routes'); //binh thuong tu nap file index ko can /index

app.use(express.static(path.join(__dirname, 'public')));

// Log request to server
var morgan = require('morgan');

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

// Set src view static
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app); //goi tu file index -> folder routes

app.listen(port, () =>
    console.log(`Example app listening at http://localhost: ${port}`),
);
