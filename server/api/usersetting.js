//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    app.route('/api/usersetting')
        .put(function (req, res) {
            User.findOne({
                _id: req.body.userID
            },function (err, user) {
                if (err) {
                    res.sendStatus(500);
                } 
                else if(user==null){
                    res.sendStatus(400);
                }
                else {

                    user.username = req.body.username;
                    user.email    = req.body.email;
                    user.password = req.body.password;

                    user.save(function (err, doc) {
                        if (err) {
                            res.status(500).send('Email has already been taken');
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