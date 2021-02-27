const router = require('express').Router();
const app = require('../app')

router.get('/', (req, res) => {

    let message = 'this will be the faceoff endpoint';
    res.json(message);

    // res.render('faceoff');

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