//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    app.route('/api/setting')
        .put(function (req, res) {
            User.findOne({
                _id: req.body.userID
            },function (err, user) {
                if (err) {
                    console.log(err);
                    res.sendStatus(400);
                } 
                else if(user==null){
                    res.sendStatus(400);
                }
                else {

                    user.gameDifficulty = req.body.gameDifficulty;

                    user.save(function (err, doc) {
                        if (err) {
                            console.log(err);
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