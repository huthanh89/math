//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const crypto = require('crypto');
const User   = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){

    app.route('/api/user')
        
        .get(function (req, res) {
            User.findOne({
                _id: req.query.userID
            },function (err, doc) {
                if (err) {
                    res.status(400).send('User Data not found');
                } 
                else {
                    if(doc==null){
                        res.status(400).send('Could not find user data');
                    }
                    else{
                        res.send(doc)
                    }
                }
            });
        })

        .post(function (req, res) {

            let salt = crypto.randomBytes(64).toString('hex')

            // Create a document
            
            const user = new User({
                username:       req.body.username,
                coin:           0,
                rank:           0,
                gameDifficulty: 0,
                created:        Date.now(),
                salt:           salt
            });

            user.save(function (err, doc) {
                if (err) {
                    res.status(400).send('Could initiate player data');
                } 
                else {
                    res.send(doc)
                }
            });
        })
}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = route;

//-----------------------------------------------------------------------------//