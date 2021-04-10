const validator = require('validator');
// const repository = require('../repositories');
const stoxValidator = require('../validator/stoxValidator');
const myaccountRepository = require('../repositories/myaccountRepository');

let updateStox = async (stox) => {

    let updatedStox;

    let validatedStox = stoxValidator.stoxValidation(stox);

    if(validatedStox === null){
        console.log(`Stox couldn't be validated`);
    } 

    try{
        updatedStox = await myaccountRepository.updateStox(validatedStox);
        return updatedStox;
    }catch(e){
        console.log('Account Service failed!', e.error);
    }
}

let getStoxById = async (id) => {

    if(!validator.isNumeric(id + '',{no_symbols: true, allow_negative: false})){
        console.log('Invalid Parameter');
        return `Invalid Parameter`;
    }

    let result = await myaccountRepository.getStoxById(id);

    return result;

};



let deleteStox = async (id) => {

    let deletedStox;
    console.log(id);

    try{
        deletedStox = await myaccountRepository.deleteStox(id);
        console.log(deletedStox);
        return deletedStox;

    }catch(err){
        console.log('Account Service Failed', err.message);
    }

}



module.exports = {
    updateStox, deleteStox, getStoxById
}