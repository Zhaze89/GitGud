/*
    ---------------------------------------------------------------------------
    @Basic Skeleton for any JS/Express application
    @v0.1
    @Toby Versteeg
    @CodeGorilla
    @december 2020

    This is a 'basic' skeleton (boilerplate) for any JS project.
    It uses Express, MongoDB, Mongoose and EJS templating and more libs.
    This boilerplate includes Bootstrap and jQuery as well to have a quick
    start on building responive websites.
    The folder structure is a basic setup to write clean code and seperates
    files into common folders like public/css, views, controllers, models etc.s
    ---------------------------------------------------------------------------
*/

const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const ExpressError = require('express-error');
const mongoSanitize = require('express-mongo-sanitize');
const MongoDBStore = require("connect-mongo")(session);
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();

// using a database?
// uncomment the code below and rename "myDB" into your own database
// mongoose.connect('mongodb://localhost:27017/myDB', {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('db connected');
// }).catch(err => {
//     console.log(err);
// });

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// set public folder to include CSS and JS in your main template
// like href="css/main.css"
// see index.ejs template
app.use(express.static(__dirname + '/public'));

// paths for including Bootstrap, jQuery and Popper
// from the node_modules folder
// and include them like href="/css/bootstrap.min.css"
// or JS like src="/js/bootstrap.min.js"
// see index.ejs template
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));

// retrieve data from posts in JSON format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// put your routes here
app.get('/', (req, res) => {
    res.render('layouts/index')
});

app.get('/contact', (req, res) => {
    res.render('layouts/contact')
});

// please work

app.get('/course1.ejs', (req, res) => {
    res.render('partials/course1.ejs')
});

app.get('/course2.ejs', (req, res) => {
    res.render('partials/course2.ejs')
});

app.get('/course3.ejs', (req, res) => {
    res.render('partials/course3.ejs')
});

app.get('/course4.ejs', (req, res) => {
    res.render('partials/course4.ejs')
});

app.get('/course5.ejs', (req, res) => {
    res.render('partials/course5.ejs')
});

app.get('/course6.ejs', (req, res) => {
    res.render('partials/course6.ejs')
});

app.get('/course7.ejs', (req, res) => {
    res.render('partials/course7.ejs')
});

// set up a port for your localhost
app.listen(8080, () => {
    console.log('Hi! :-) I\'m listening to port 8080')
});

