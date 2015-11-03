// call the packages we need
var express = require('express'); //call express
var app = express(); //define app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var categoryRoutes = require('./modules/blog/routes/category');
var blogRoutes = require('./modules/blog/routes/blog');
var commentRoutes = require('./modules/blog/routes/comment');

mongoose.connect('mongodb://localhost:27017/social');

// configure app to use body parser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 8080; // Set the application port

app.use('/api/category', categoryRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/comment', commentRoutes);

app.listen(port);
console.log('server starts on ' + port);
