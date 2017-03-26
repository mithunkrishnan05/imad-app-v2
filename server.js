var express = require('express');
var morgan = require('morgan');
var path = require('path');
/*var crypto = require('crypto');*/
const crypto = require('crypto');
var app = express();
app.use(morgan('combined'));





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



function hash (input,salt) {
    /*var hashed = crypto.pbkdf2Sync(input, salt, 100000, 512, 'sha512');*/
const key = crypto.pbkdf2Sync('secret', 'salt', 100000, 512, 'sha512');
 return key.toString();
    
}
app.get('/hash',function (req,res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
    var hashedString = hash(req.params.input,'this is sample');

    res.send(hashedString);
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
