const router = require('express').Router();
const users = require('./users-model');
const validateUser = require('./validateUser');

router.get('/', (req, res) => {
    users.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: 'Could not retreive users', errorMessage: err}))
});

router.post('/', validateUser, (req, res) => {
   users.addUser(req.body)
   .then(() => res.status(201).json({userRegistered: true}))
   .catch(err => res.status(500).json({error: 'Could not add user', errorMessage: err}))
});

module.exports = router;