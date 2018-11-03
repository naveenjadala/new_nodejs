var express = require('express');

var app = express();

var prolist = require('./routes/prolist.router');

function cb() {
    console.log("server has be started on 3000");
}
app.listen(3000, cb);

app.get('/',function(req, res) {
    res.send("asdasd");
});

app.use('/', prolist);