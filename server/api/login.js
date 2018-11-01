//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const crypto = require('crypto');
const User   = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    
    app.route('/api/login')
        .get(function (req, res) {

            
            User.findOne({
                email: req.query.email,
            },function (err, doc) {
                if (err) {
                    res.status(400).send('Error looking up username');
                } 
                else {
                    if(doc==null){
                        res.status(400).send('Incorrect email or password');
                    }
                    else{
                        
                        let iterations = 10000;
                        let hash       = crypto.pbkdf2Sync(req.query.password, doc.salt, iterations, 64, 'sha1').toString('hex');

                        if(doc.password == hash){
                            res.send(doc);
                        }
                        else{
                            res.status(400).send('Incorrect email or password');
                        }
                        
                    }
                }
            });
        })
}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = route;

//-----------------------------------------------------------------------------//