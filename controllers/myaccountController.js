const router = require('express').Router();
const myaccountService = require('../services/myaccountService');




router.put('/update', async (req, res) => {

    let stox = req.body;

    try{

        const result = await myaccountService.updateStox(stox);
        res.json(result);

    }catch(e){
        console.log(e.message);
        e.status(500);
        res.send(e.message);
    }
});


router.delete('/:id', async (req, res) => {

    let deletedStox = req.params.id;
    console.log(deletedStox);

    try{

        const result = await myaccountService.deleteStox(deletedStox);
        res.json(result);

    }catch(e){
        console.log(e.message);
        e.status(500);
        res.send(e.message);
    }

});


module.exports = router;