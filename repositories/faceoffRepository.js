const {sql, dbConnection} = require('../database/db');

const GET_SAVED_STOXS = `SELECT * FROM stox WHERE author = @author ORDER BY _id ASC for json path;`;

const GET_STOX_BY_ID = `SELECT * FROM stox WHERE author = @author AND _date = @date ORDER BY _date for json path ;`;

const INSERT_NEW_STOX = 'INSERT INTO stox (asset1,asset2,_date,author) VALUES (@asset1,@asset2,@date,@author);';



let getStox = async (authorId) => {

    let author;

    try{
        const pool = await dbConnection;
        const result = await pool.request()
        .input('author', authorId)
        .query(GET_SAVED_STOXS);

        author = result.recordset[0];
    }catch(err){
        console.log('DB Error = get Stox : ' + err.message);
    }

    return author;

}


let getStoxByDate = async (authorId, date) => {

    let author;

    try{
        const pool = await dbConnection;
        const result = await pool.request()
        .input('author', authorId)
        .input('date', sql.Date, date)
        .query(GET_STOX_BY_ID);

        author = result.recordset[0];

    }catch(err){
        console.log('DB Error = get Stox : ' + err.message);
    }

    return author;

}


let createNewFaceoff = async (newFaceoff) => {
    console.log(newFaceoff);
    
    let faceoff;

    try{
        const pool = await dbConnection
        const result = await pool.request()
        .input('asset1', sql.VarChar, newFaceoff.asset1)
        .input('asset2', sql.VarChar, newFaceoff.asset2)
        .input('date', sql.Date, newFaceoff._date)
        .input('author', sql.VarChar, newFaceoff.author)
        .query(INSERT_NEW_STOX)

        faceoff = result.rowsAffected[0];
        console.log(result.rowsAffected[0]);

    } catch (err){
        console.log('DB Error = Create new product: ' + err.message);

    } 

    return faceoff;

};

module.exports = {
    getStox,getStoxByDate,createNewFaceoff
};

