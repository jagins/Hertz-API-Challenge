const router = require('express').Router();
const users = require('./users-model');
const validateUser = require('./validateUser');

/*
    GET /api/users
    returns all of the users in the databse
    ex) {[userID: 12345, userId: 123456]}
*/
router.get('/', (req, res) => {
    users.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: 'Could not retreive users', errorMessage: err}))
});

/*
    POST /api/users
    returns the response of userRegistered: true if inserting into the database is successful
    body = {userId: 12345}
    validateUser is middleware that will validate the object that is being sent up and will check if
    it's a number and check if that userId is already in the databse. 
*/
router.post('/', validateUser, (req, res) => {
   users.addUser(req.body)
   .then(() => res.status(201).json({userRegistered: true}))
   .catch(err => res.status(500).json({error: 'Could not add user', errorMessage: err}))
});

module.exports = router;