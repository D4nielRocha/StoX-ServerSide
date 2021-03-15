const router = require('express').Router();
const userServices = require('../services/userService');



router.post('/', async (req, res) => {

    let user = req.body;
    console.log(user);

    const result = await userServices.newUser(user);
    res.json(result);
    
    


    

});



module.exports = router;