
const router = require('express').Router();
const idx = require('../services/indexService');

router.get('/', async (req, res) => {


    let result = await idx.showIndex();
    res.json(result);

    
    // res.render('index');
})


//post route
router.post('/', (req, res) => {
    res.send('POST REQUEST SUCEESFULLY SENT!');
})



module.exports = router;
