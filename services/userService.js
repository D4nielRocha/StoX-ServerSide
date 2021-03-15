const validator = require('validator');
const userValidator = require('../validator/userValidator')
const userRepository = require('../repositories/userRepository');




let newUser = async (user) => {

    let newUser;

    let validatedUser = await userValidator.validateUser(user);

  
    if(validatedUser != null){
        console.log(`this is the validated user in services`);
        console.log(validatedUser); 

        newUser = await userRepository.createNewUser(validatedUser);
    }

    return newUser;
}

module.exports = {
    newUser
}