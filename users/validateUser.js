const users = require('./users-model');

function validateUser(req, res, next)
{
    //check if the request has the userId in the body and checks if it's a number
    if(req.body.userId && Number.isInteger(req.body.userId))
    {
        const {userId} = req.body;
        //check to see if that user is already in the database
        users.findUserByUserId(userId)
        .then(foundUser => {
            //if the user is not already in the databse continue into the route
            if(!foundUser) {
                next();
            }
            else {
                res.status(400).json({userRegistered: true, errorMessage: 'User has already been registered'})
            }
        })
        .catch(err => res.status(500).json({error: 'Could retriveve user', errorMessage: err}))
    }
    else
        res.status(400).json({errorMessage: 'userId must be in the object set to an integer'})

}

module.exports = validateUser;