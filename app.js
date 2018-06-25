var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


var server = app.listen(port, function(){
    console.log("Sever online, port: " + port);
});

app.get('/', function(req, res){
    res.render('index');
});



//rgb(172, 206, 229)