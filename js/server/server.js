// Require our dependencies
var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    Task = require('./models/Task'),
    streamHandler = require('./utils/streamHandler');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/react-tweets');

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

app.get('/todos/:id', function (req, res) {

    var task = new Task({name: 'Master NodeJS', completed: false, note: 'Getting there...'});

    task.save(function(err){
        if(err)
            console.log(err);
        else
            console.log("Veikia");
        console.log(task);
    });

    Task.getTodos(1, 1, function(err, todo){
        console.log(todo);
        if(err) res.send(err);
        res.json(todo);
    });
});