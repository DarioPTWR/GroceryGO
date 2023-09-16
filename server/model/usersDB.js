const db = require("../db");

const usersDB = {
    addUser: function(details, callback){
        db.none('INSERT INTO users(imageuri,username, email, password) VALUES($1, $2, $3, $4)', [
            details.imageuri,
            details.username,
            details.email,
            details.password,
        ])
            .then(() => callback(null, 'Account added'))
            .catch(err => callback(err, null));
    },

    verifyUser: function(details, callback){
        db.one('SELECT user_id, username, email FROM users WHERE username = $1 AND password = $2;', [
            details.username, 
            details.password,
        ])
            .then(result => callback(null, result))
            .catch(err => callback(err, null));
    },

    getUserDetails: function(userId, callback){
        db.one('SELECT username, email FROM users WHERE id = $1;', [userId])
            .then(result => callback(null, result))
            .catch(err => callback(err, null));
    }
}

module.exports = usersDB;