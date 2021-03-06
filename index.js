var express = require('express')
var app = express()
app.use(express.static('./public'))    // set directory for static files

port = process.env.PORT || 5000

app.set('views', __dirname + '/views');            // set express view template directory for express
app.set("view engine", "pug"); //
app.use(express.static(__dirname+ "/public"))

app.get('/', function (req, res) {

    return res.render('layout');

});

// Listen on port
app.listen(port, function () {
    console.log('Slow Loris listening on port ' + port);
   });
