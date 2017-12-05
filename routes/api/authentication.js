const express = require('express');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();


router.post('/register', (req, res) => {
    //uses the values from the incoming json
    const newUser = new User(req.body)

    User.register(newUser, req.body.password, (err, user) => {

        if (err) {
            return res.send(JSON.stringify({ error: err }));
        }

        return res.send(JSON.stringify(user));
    });
});

router.post('/login', (req, res) => {
    passport.authenticate('local')(req, res, () => {

        //if the login is succesfull send the user info back
        if (req.user) {
            return res.send(JSON.stringify(req.user));
        }
        //return an error
        return res.send(JSON.stringify({ error: "cannot login"}));
    });
});

//LOGOUT
router.get('/logout', (req, res) => {
    req.logout();
    return res.send(JSON.stringify(req.user));
})

module.exports = router;
