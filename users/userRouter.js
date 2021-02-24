const router = require('express').Router();
const users = require('./users-model');

router.get('/', (req, res) => {
    users.getUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: 'Could not retreive users', errorMessage: err}))
});

router.post('/', (req, res) => {

});

module.exports = router;