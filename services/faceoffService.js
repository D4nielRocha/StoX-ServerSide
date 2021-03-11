const validator = require('validator');
const repository = require('../repositories/faceoffRepository');

let displayFaceoff = async () => {

    let result = "This enpoint will display the faceoff form - FROM SERVICE";
    
    return result;

}


let showComparison = async (authorId) => {

    if(!validator.isAlpha(authorId)){
        console.log('Invalid Parameter');
        return `Invalid Parameter`;
    }

    let result = await repository.getStox(authorId);

    return result;

}


let showComparisonByDate = async (authorId, date) => {

    if(!validator.isAlpha(authorId)){
        console.log('Invalid Parameter');
        return `Invalid Parameter`;
    }

    if(!validator.isDate(date)){
        console.log('Invalid Parameter');
        return `Invalid Parameter`;
    }

    let result = await repository.getStoxByDate(authorId, date);

    return result;

}

module.exports = {

    displayFaceoff, showComparison, showComparisonByDate
}