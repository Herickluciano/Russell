var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongodb = require('./db/mongo');
const { error } = require('console');
mongodb.initClientDbConnection();
const bcrypt = require("bcrypt");
const { password } = require('./models/user');


var app = express();

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(cors ({
    exposedHeaders :['Authorization'],origin :'*'}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.get("/",(req,res)=>{
  res.render("login");
});

app.get("/signup",(req,res)=>{
  res.render("signup");
});
app.post("/signup", async(req,res)=>{
     const data = {
      name :req.body.userename,
      email : req.body.usermail,
      password :req.body.userpassword,
}
 const userdata = await User.InsertMany(data);
 console.log(userdata);
});
app.get("/catways",(req,res)=>{
  res.render("catways");
});


app.get("/reservation",(req,res)=>{
  res.render("reservation");
});
app.get("/tableauDeBord",(req,res)=>{
  res.render("tableauDeBord");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({nam : 'API', version: '1.0', status: 404, message:'not_found' });
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
