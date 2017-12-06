const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

mongoose.Promise = global.Promise;

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
//LOGIN
router.post('/login', async (req, res) => {
    // look up the user by their emails
    const query = User.findOne({
        email: req.body.email
    })
    const foundUser = await query.exec();

    if (foundUser) {
        req.body.username = foundUser.username;
    }
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
