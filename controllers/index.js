
const router = require('express').Router();
const app = require('../app');

router.get('/index', (req, res) => {
    res.render('index');
})

router.get('/stock', (req, res) => {
    res.send('STOCK COMPARISON PAGE!! COMING UP!!');
})

//route with variable path.
router.get('/stock/:comparison', (req, res) => {
    //access variable from req.params = destructuring
    const { comparison } = req.params;
    //use variable
    res.send(`This is a comparison of ${comparison}`);
})

router.get('/stock/:comparison/result/:resultID', (req, res) => {
    //access variable from req.params = destructuring
    const { comparison, resultID } = req.params;
    //use variable
    res.send(`This is the ${resultID} comparison of ${comparison}`);
})


router.get('/test', (req, res) => {
    res.status(200).send( {
        tshirt: 'striped',
        size: 'large'
    })
})

router.post('/test/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(404).send('BAD REQUEST! WE NEED YOUR LOGO');
    }

    res.status(200).send(`This is your shirt id ${id} and your logo ${logo}`);
})

//post route
router.post('/index', (req, res) => {
    res.send('POST REQUEST SUCEESFULLY SENT!');
})


//error handler (* means = all other routes)
router.get('*', (req, res) => {
    res.send('I don`t know this path!');
})




module.exports = router;