// Require our dependencies
var express = require('express'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    path = require('path'),
    Task = require('./models/Task'),
    bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'index'}));
app.set('view engine', 'handlebars');
app.disable('etag');

mongoose.connect('mongodb://localhost/learnly');

var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});

var io = require('socket.io').listen(server);

app.use('/css', express.static(path.resolve(__dirname + '/../../css')));
app.use('/js', express.static(path.resolve(__dirname + '/../../js')));
app.use('/img', express.static(path.resolve(__dirname + '/../../img')));
app.use('/fonts', express.static(path.resolve(__dirname + '/../../fonts')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/todos/', function(req, res) {
    var task = new Task({name: 'User', completed: false, note: req.body.message});
    task.save(function(err){
        if(err) {
            console.log("Error!: ", err);
        } else {
            res.send("OK");
        }
    });
});