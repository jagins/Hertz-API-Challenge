const users = require('./users-model');

function validateUser(req, res, next)
{
    const {userId} = req.body;
    users.findUserByUserId(userId)
    .then(foundUser => {
        if(!foundUser) {
            next();
        }
        else {
            res.status(400).json({userRegistered: true, errorMessage: 'User has already been registered'})
        }
    })
    .catch(err => console.log(err))

}

module.exports = validateUser;