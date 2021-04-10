const router = require('express').Router();
const faceoffService = require('../services/faceoffService');
const Stox = require('../models/stox')
const faceoffRepository = require('../repositories/faceoffRepository');
const stoxValidator = require('../validator/stoxValidator');

router.get('/', async (req, res) => {

    let message = await faceoffService.displayFaceoff();
    res.json(message);

});


router.get('/:author', async (req, res) => {

    let authorId = req.params.author;
    console.log(authorId);

    let result = await faceoffService.showComparison(authorId);
    res.json(result);

});

router.get('/:author/:date', async (req, res) => {

    let authorId = req.params.author;
    let date = req.params.date;
    console.log(date);

    let result = await faceoffService.showComparisonByDate(authorId, date);
    res.json(result);

});

router.post('/', async (req, res) => {

    console.log(req.body);

    const result = await faceoffService.createStox(req.body);
    
    res.json(result);
    

})


module.exports = router;











// router.get('/', (req, res) => {
//     // res.send('STOCK COMPARISON PAGE!! COMING UP!!');
//     res.render('faceoffService');
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