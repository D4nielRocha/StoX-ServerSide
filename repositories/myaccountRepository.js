const {sql, dbConnection} = require('../database/db');

//SQL QUERIES 

const UPDATE_STOX = 'UPDATE stox SET asset1_name = @name1, asset1_invested = @invested1 ,asset1_amount = @amount1, asset1_price = @price1, asset1_shares = @shares1 ,asset1_closing = @closing1, asset2_name = @name2 ,asset2_invested = @invested2 ,asset2_amount = @amount2 ,asset2_price = @price2 ,asset2_shares = @shares2 ,asset2_closing = @closing2 ,comment = @comment, _date = @date, author = @author WHERE _id = @id; SELECT * FROM stox WHERE author = @author for json path';

const GET_STOX_BY_ID = 'SELECT * FROM stox WHERE _id = @id for json path';

const DELETE_STOX = 'DELETE FROM stox WHERE _id = @id;';  




let updateStox = async (stox) => {
    console.log(`This is the stox at the repository`);
    console.log(stox);
    
    let updatedStox;

    try{
        const pool = await dbConnection
        const result = await pool.request()
        .input('id', sql.Int, stox._id)
        .input('name1', sql.NVarChar, stox.asset1_name)
        .input('invested1', sql.Bit, stox.asset1_invested)
        .input('amount1', sql.Decimal, stox.asset1_amount)
        .input('price1', sql.Decimal, stox.asset1_price)
        .input('shares1', sql.Decimal, stox.asset1_shares)
        .input('closing1', sql.Decimal, stox.asset1_closing)
        .input('name2', sql.NVarChar, stox.asset2_name)
        .input('invested2', sql.Bit, stox.asset2_invested)
        .input('amount2', sql.Decimal, stox.asset2_amount)
        .input('price2', sql.Decimal, stox.asset2_price)
        .input('shares2', sql.Decimal, stox.asset2_shares)
        .input('closing2', sql.Decimal, stox.asset2_closing)
        .input('comment', sql.NVarChar, stox.comment)
        .input('date', sql.Date, stox._date)
        .input('author', sql.VarChar, stox.author)
        .query(UPDATE_STOX)

        updatedStox = result.recordset[0];
        console.log(result.recordset[0]);

    } catch (err){
        console.log('DB Error = Update product: ' + err.message);

    } 

    return updatedStox;

};


let getStoxById = async (id) => {

    let stoxId;
    console.log(`this is the stox at the repository`, id);

    try{
        const pool = await dbConnection
        const result = await pool.request()
        .input('id', sql.Int, id)
        // .input('author', sql.NVarChar, stox.author)
        .query(GET_STOX_BY_ID);

        
        stoxId = result.recordset[0][0];
        

    }catch (err){
        console.log('DB Error = Delete product: ' + err.message);

    } 
    console.log(`this is the deletedStox in the repository`, stoxId);
    return stoxId;
}



let deleteStox = async (id) => {

    let deletedStox;
    console.log(`this is the stox at the repository`, id);

    try{
        const pool = await dbConnection
        const result = await pool.request()
        .input('id', sql.Int, id)
        // .input('author', sql.NVarChar, stox.author)
        .query(DELETE_STOX);

        
        deletedStox = result.rowsAffected;
        

    }catch (err){
        console.log('DB Error = Delete product: ' + err.message);

    } 
    console.log(`this is the deletedStox in the repository`, deletedStox);
    return deletedStox;
}


module.exports = {
    updateStox, deleteStox, getStoxById
}