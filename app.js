var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
const FileController = require('./controller/FileController');
const session = require('express-session');

const multerConfig = require ('./config/multer')

var indexRouter = require('./routes/index');
var legendariesRouter = require('./routes/legendaries')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const uploadFile = multer({storage: multerConfig});

app.use(session({
  secret:'99999',
  resave:false,
  saveUnitialized: true,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/legendaries', legendariesRouter); // nessa parte ficará responsavel  no navegador para demonstrar e contatenar o caminho //
app.post('/files', uploadFile.single('file'), FileController.storeFile);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
