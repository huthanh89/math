//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const User = require('../model/user.js');

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
                    console.log(err);
                } 
                else {
                    res.send(doc)
                }
            });
        })

        .post(function (req, res) {

            // Create a document
            
            const user = new User({
                username: req.body.username,
                coin:     0,
                rank:     0,
                created:  Date.now(),
            });
            
            user.save(function (err, doc) {
                if (err) {
                    console.log(err);
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