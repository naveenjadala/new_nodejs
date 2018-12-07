var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

var bottleList = require('./routes/bottleList.router');
 

function cb() {
    mongoose.connect("mongodb://localhost/productList",() =>console.log("db connected"));
    console.log("server has be started on 3000");
}
app.listen(3000, cb);

app.use(bodyParser.json());

app.use('/', bottleList);

app.get('/',function(req, res) {
    res.send("asdasd");
});