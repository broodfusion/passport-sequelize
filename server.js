var express    = require('express');
var app        = express();
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();

//For body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

//For EJS Views
app.set('views', __dirname + '/app/views');
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render('index');
});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.tbl_Employee);



//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
})