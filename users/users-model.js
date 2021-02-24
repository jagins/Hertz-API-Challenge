const db = require('../data/db-config');

function addUser(user)
{

}

function getUsers()
{
   return db('users').select('userId')
}

module.exports = {addUser, getUsers}