const express = require('express');
const router = express.Router();

router.get('/register',(req, res) => {
    res.end('We made it here');
});

module.exports = router;