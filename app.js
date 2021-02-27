const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8080;
const HOST = "127.0.0.1";

// app.use( (req, res, next) => {
//     res.setHeader('Content-Type', 'html');
    
//     next();
// })

app.use(express.json());
app.use(express.static('public'));

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({ credentials: true, origin: true }));
app.options('*', cors()) // include before other routes


// app.use('/', require('./controllers/index'));
// app.use('/faceoff', require('./controllers/faceoff'));

app.listen(PORT, HOST,  () => {
    console.log(`Connected at http:/${HOST}:${PORT}`);
})

module.exports = app;


