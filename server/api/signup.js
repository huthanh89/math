//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const crypto = require('crypto');
const User   = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    app.route('/api/signup')
        .put(function (req, res) {

            if (req.body.password !== req.body.confirm) {
                res.status(400).send('Confirmed password does not match');
            } 

            User.findOne({
                _id: req.body.userID
            },function (err, user) {
                if (err) {
                    res.status(400).send('User data not found');
                } 
                else if(user==null){
                    res.status(400).send('User does not exist');
                }
                else {

                    let iterations = 10000;
                    let hash       = crypto.pbkdf2Sync(req.body.password, user.salt, iterations, 64, 'sha1').toString('hex');
                    
                    user.username  = req.body.username;
                    user.email     = req.body.email;
                    user.password  = hash;

                    user.save(function (err, doc) {
                        if (err) {
                            res.status(400).send('Email has already been taken');
                        } 
                        else {
                            res.send(doc);
                        }
                    });

                }
            });
        })
}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = route;

//-----------------------------------------------------------------------------//