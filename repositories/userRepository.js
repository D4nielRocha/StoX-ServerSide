const {sql, dbConnection} = require('../database/db');


const SQL_NEW_USER = 'INSERT INTO users (username,password,email) VALUES (@user,@password,@email); SELECT * FROM users;';



let createNewUser = async (user) => {

    console.log(user);
    console.log('this is the saved user');

    let newUser;

    try{
        let pool = await dbConnection;
        let result = await pool.request()
        .input('user', user.username)
        .input('password', user.password)
        .input('email', user.email)
        .query(SQL_NEW_USER)


        newUser = result.recordset[0];
        
    }catch(err){
        console.log("Creating new user failed at DB Repository" + err.message);
    }

    return newUser;

}

module.exports = {
    createNewUser
}