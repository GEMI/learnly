// Require our dependencies
var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    streamHandler = require('./utils/streamHandler');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/react-tweets');

//// Index Route
//app.get('/', routes.index);
//
//// Page Route
//app.get('/page/:page/:skip', routes.page);
//
//// Set /public as our static content dir
//app.use("/", express.static(__dirname + "/public/"));

// Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = require('socket.io').listen(server);


app.use('/css', express.static(path.resolve(__dirname + '/../../css')));
app.use('/js', express.static(path.resolve(__dirname + '/../../js')));

app.get('/', function (req, res) {
    var newPath = path.resolve(__dirname + '/../../index.html');
    res.sendFile(newPath);
});
//
//app.get('/todos/:id', function (req, res) {
//    console.log("calling!");
//    Todo.findById(req.params.id, function(err, todo){
//        if(err) res.send(err);
//        res.json(todo);
//    });
//});

app.listen(3001);


// Set a stream listener for tweets matching tracking keywords
//twit.stream('statuses/filter',{ track: 'scotch_io, #scotchio'}, function(stream){
//    streamHandler(stream,io);
//});/**
// * Created by Silky on 2015.03.11.
// */
