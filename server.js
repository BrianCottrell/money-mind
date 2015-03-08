var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

// Viewed at http://localhost:8080
app.get('/', function(req, res){
	//Displays the specified file on a webpage
    res.sendFile(path.join(__dirname+'/index.html'));
//    res.sendFile(path.join(__dirname+'/invitation1.png'));
//    res.sendFile(path.join(__dirname+'/BrianCottrell.pdf'));
});

app.listen(8081);