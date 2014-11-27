var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var routes = require('./routes/index');
var login = require('./routes/login');
var user = require('./routes/users');


var users = require('./models/user');




//require mongoose node module
var mongoose = require('mongoose');

// connecting to the local mongo db database
mongoose.connect('mongodb://localhost/genericApp');


// loading the passport modules
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
       secret: process.env.secretKey || 'secret',
       resave: false,
       saveUninitialized: false
}));

//Initialize Passport! Also use passport session() middleware, to persisitent login session
app.use(passport.initialize());
app.use(passport.session());


//Serializing sessions
passport.serializeUser(function(user, done){
    console.log(user.id);
    done(null, user.id);
});

//DeSerializing sessions
passport.deserializeUser(function(id, done){
    users.findById(id, function(err, user) {
        console.log(user);
        done(null, user);        
    });
});


passport.use(new LocalStrategy(function(username, password, done){
  process.nextTick(function(){
    //Auth Check Login
    users.findOne({
        username:username,
    }, function(err, user){
        if (err) {
            console.log("teettt");
            return done(err);
        }

        if(!user){
            return done(null, false, {message: "Login Failed"});
            return user.incLoginAttempts(function(err) {
                console.log(failedLogin);
                if (err) return cb(err);
                return cb(null, null, failedLogin.MAX_ATTEMPTS);
            });
        }

        // check if the account is currently locked
        if (user.isLocked) {
            console.log("test");
            // just increment login attempts if account is already locked
            return user.incLoginAttempts(function(err) {
                if (err) return cb(err);
                return cb(null, null, reasons.MAX_ATTEMPTS);
            });
        }

        if(user.password != password){
            return done(null,false);
        }
        return done(null, user);
       });
    });
}));



app.use('/', routes);
app.use('/users', user);
app.use('/login', login);



app.post('/login',
    passport.authenticate('local', {
        successRedirect:'/loginSuccess',
        failureRedirect:'/login'
    })
);


//redirecction of login failure
app.get('/loginFailure', function(req,res,next){
    res.send('Failed to authernticate');
});

//redirecction of login success
app.get('/loginSuccess', function(req,res,next){
    res.redirect('/users');

});

//logout
//redirecction of login success
app.get('/logout', function(req,res,next){
    req.logout();
    res.redirect('/login');
    
});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
