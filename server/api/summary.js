//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const _    = require('lodash');
const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    app.route('/api/summary')
        .put(function (req, res) {

            User.find({},function (err, users) {

                let targetUser = _.find(users, function(user){ 
                    return user._id == req.body.userID;
                })

                if (err) {
                    res.status(400).send('Error finding user');
                } 
                else if(targetUser==null){
                    res.status(400).send('User not found');
                }
                else {

                    let rank = users.length + 1;
                    let coin = targetUser.coin + req.body.coin;

                    users.forEach(function(user){

                        if(user.coin < coin){
                            rank -= 1;
                        }

                    });

                    targetUser.coin  = coin;
                    targetUser.rank  = rank;

                    targetUser.save(function (err, doc) {
                        if (err) {
                            res.status(400).send('Could not update user data');
                        } 
                        else {
                            res.send(doc)
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