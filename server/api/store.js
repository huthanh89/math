//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const mongoose = require('mongoose');
const User     = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    
    
    app.put('/api/store', function (req, res) {
        User.findOne({
            _id: req.body.userID
        },function (err, user) {
            if (err) {
                res.status(400).send('Could not find user settings');
            } 
            else if(user==null){
                res.sendStatus(400);
            }
            else {

                
                let storeCoin = user.storeCoin - req.body.monsterPrice;
                let monsterID = mongoose.Types.ObjectId();
                
                user.monsters.push({
                    monsterID: monsterID,
                    typeID:    req.body.monsterID
                });
                
                user.storeCoin = storeCoin;

                user.save(function (err, doc) {
                    if (err) {
                        res.status(400).send('Could not update settings');
                    } 
                    else {
                        res.send({
                            storeCoin: storeCoin,
                            monsterID: monsterID,
                            typeID:    req.body.monsterID
                        });
                    }
                });

            }
        });
    });
    
}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = route;

//-----------------------------------------------------------------------------//