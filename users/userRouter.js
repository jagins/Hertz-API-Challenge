const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'hello from users get request'});
});

router.post('/', (req, res) => {

});

module.exports = router;