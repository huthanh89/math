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
                    console.log(err);
                    res.sendStatus(400);
                } 
                else if(targetUser==null){
                    res.sendStatus(400);
                }
                else {

                    let rank = users.length;

                    users.forEach(function(user){

                        console.log(user.coin, targetUser.coin, rank)

                        if(user.coin < targetUser.coin){
                            rank -= 1;
                        }
                    });

                    targetUser.coin += req.body.coin;
                    targetUser.rank  = rank;

                    targetUser.save(function (err, doc) {
                        if (err) {
                            console.log(err);
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