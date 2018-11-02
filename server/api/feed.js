//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const _    = require('lodash');
const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    
    app.put('/api/feed', function (req, res) {
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

                // Search for target and feed.
                
                let monsters = user.monsters;
                let targetID = req.body.targetID;
                let feedID   = req.body.feedID;

                let target = _.find(monsters, function(monster){
                    return monster.monsterID == targetID;
                });
                
                let feed = _.find(monsters, function(monster){
                    return monster.monsterID == feedID;
                });

                // Update level.

                let level = (feed.level * feed.feed) / target.levelExp;

                target.level += level;
                
                if(target.level >= 100){
                    target.level = 100;
                }
                
                target.reward = Math.floor(target.level * target.bonus);

                // Update collection

                monsters = _.filter(monsters, function(monster){
                    let monsterID = monster.monsterID;
                    return monsterID != targetID && monsterID != feedID;
                });

                monsters.push(target);

                user.monsters = monsters;

                user.save(function (err) {
                    if (err) {
                        res.status(400).send('Could not update settings');
                    } 
                    else {
                        res.send(monsters);
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