const router   = require('express').Router();
module.exports = router;

router.get('/test/', function (req, res) {
    res.send('Test route called.');
});
