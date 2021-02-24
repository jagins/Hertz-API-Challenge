const db = require('../data/db-config');

function addUser(user)
{
    return db('users').insert(user, 'id');
}

function getUsers()
{
   return db('users').select('userId')
}

function findUserByUserId(userId)
{
    return db('users').where({userId}).first()
}

module.exports = {addUser, getUsers, findUserByUserId}