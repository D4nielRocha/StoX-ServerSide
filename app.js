const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const HOST = "127.0.0.1";

// app.use( (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
    
//     next();
// })

app.use(express.static(__dirname + "/public"));
app.set(express.static('public'));

// app.use(bodyParser.text());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');



app.use('/', require('./controllers/index'));

app.listen(PORT, HOST,  () => {
    console.log(`Connected at http:/${HOST}:${PORT}`);
})

module.exports = app;
