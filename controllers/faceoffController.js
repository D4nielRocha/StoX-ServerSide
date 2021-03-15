const router = require('express').Router();
const faceoff = require('../services/faceoffService');
const Stox = require('../models/stox')
const faceoffRepository = require('../repositories/faceoffRepository');

router.get('/', async (req, res) => {

    let message = await faceoff.displayFaceoff();
    res.json(message);

});


router.get('/:author', async (req, res) => {

    let authorId = req.params.author;

    let result = await faceoff.showComparison(authorId);
    res.json(result);

});

router.get('/:author/:date', async (req, res) => {

    let authorId = req.params.author;
    let date = req.params.date;
    console.log(date);

    let result = await faceoff.showComparisonByDate(authorId, date);
    res.json(result);

});

router.post('/', async (req, res) => {

    let time = Date.now();
    let today = new Date(time);

    console.log(req.body);


    let asset1 = req.body.asset1;
    let asset2 = req.body.asset2;
 
    let date = today.toISOString().slice(0,10);
    let author = 'Suellen';


    let stox = new Stox(asset1,asset2,date,author);

    const result = await faceoffRepository.createNewFaceoff(stox);
    
    res.json(result);
    

})


module.exports = router;











// router.get('/', (req, res) => {
//     // res.send('STOCK COMPARISON PAGE!! COMING UP!!');
//     res.render('faceoff');
// })

// //route with variable path.
// router.get('/:comparison', (req, res) => {
//     //access variable from req.params = destructuring
//     const { comparison } = req.params;
//     //use variable
//     res.send(`This is a comparison of ${comparison}`);
// })

// router.get('/:comparison/result/:resultID', (req, res) => {
//     //access variable from req.params = destructuring
//     const { comparison, resultID } = req.params;
//     //use variable
//     res.send(`This is the ${resultID} comparison of ${comparison}`);
// })