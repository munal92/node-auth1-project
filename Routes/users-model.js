const db  = require('../data/db-config.js')

function find() {
    return db('users');
}

function add(userData) {
    return db('users').insert(userData)
    
}

function findByUserName(filter) {
   
    return db("users").where(filter);
}



module.exports = {
    find,
    add,
    findByUserName,
}