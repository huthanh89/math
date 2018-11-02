//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    
    app.get('/api/visit', function (req, res) {

        User.findOne({
            _id: req.query.userID
        },function (err, user) {
            if (err) {
                res.status(400).send('Could not find user data');
            } 
            else if(user==null){
                res.sendStatus(400);
            }
            else {
                res.send({
                    username: user.username,
                    coin:     user.coin,
                    rank:     user.rank,
                    monsters: user.monsters
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