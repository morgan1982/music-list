const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        text: 'Musiclist Api Test'
    })
})


module.exports = router;
