// Require our dependencies
var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    Task = require('./models/Task');

var app = express();
var port = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'index'}));
app.set('view engine', 'handlebars');
app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/learnly');

var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = require('socket.io').listen(server);

app.use('/css', express.static(path.resolve(__dirname + '/../../css')));
app.use('/js', express.static(path.resolve(__dirname + '/../../js')));
app.use('/img', express.static(path.resolve(__dirname + '/../../img')));
app.use('/fonts', express.static(path.resolve(__dirname + '/../../fonts')));

createDummyData();

app.get('/', function(req, res){
    res.render('layouts/index');
});

app.get('/todos/:id', function (req, res) {

    Task.getTodos(function(err, todo){
        if(err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    });
});

function createDummyData () {
    var task = new Task({name: 'Master NodeJS', completed: false, note: 'Getting there...'});

    task.save(function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("Mock data created");
        }
    });
}