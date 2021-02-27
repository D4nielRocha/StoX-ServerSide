
const router = require('express').Router();
// const { default: fetch } = require('node-fetch');
const app = require('../app');

router.get('/', (req, res) => {


    let result = `This wil be the index page`
    res.json(result);

    
    // res.render('index');
})


//post route
router.post('/', (req, res) => {
    res.send('POST REQUEST SUCEESFULLY SENT!');
})



module.exports = router;










// router.get('/test', (req, res) => {
//     res.status(200).send( {
//         tshirt: 'striped',
//         size: 'large'
//     })
// })

// router.post('/test/:id', (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if(!logo){
//         res.status(404).send('BAD REQUEST! WE NEED YOUR LOGO');
//     }

//     res.status(200).send(`This is your shirt id ${id} and your logo ${logo}`);
// })