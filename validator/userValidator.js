const validator = require('validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');



let validateUser = async (user) => {

    let validatedUser;
    console.log(`This is your password!`)
    console.log(user.password)
    let saltRounds = await bcrypt.genSalt(4);
    let hashPassword = await bcrypt.hash(user.password, saltRounds);
    console.log(hashPassword);

    let checkPassword = await bcrypt.compare(user.password, hashPassword);

    console.log(`Your password match? ${checkPassword}`);


    if(validator.isAlphanumeric(user.username + '') && validator.isAscii(hashPassword) && validator.isEmail(user.email)){
        validatedUser = new User(
                user.username,
                hashPassword,
                user.email
            )
    } else {
        console.log('Validating USER failed!');
    }

    
    return validatedUser;

}

module.exports = {
    validateUser
}




