//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const crypto = require('crypto');
const User   = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){

    // GET REQUEST

    app.get('/api/user', function (req, res) {
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
    });


    // POST REQUEST

    app.post('/api/user',function (req, res) {

        let salt = crypto.randomBytes(64).toString('hex')

        // Create a document
        
        const user = new User({
            username: req.body.username,
            created:  Date.now(),
            salt:     salt
        });

        user.save(function (err, doc) {
            if (err) {
                res.status(400).send('Could initiate player data');
            } 
            else {
                res.send(doc)
            }
        });
    });
}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = route;

//-----------------------------------------------------------------------------//