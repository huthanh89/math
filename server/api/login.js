//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){
    
    app.route('/api/login')
        .get(function (req, res) {

            console.log(req.query);

            User.findOne({
                email:    req.query.email,
                password: req.query.password
            },function (err, doc) {
                if (err) {
                    res.status(400).send('Error looking up username');
                } 
                else {
                    if(doc==null){
                        res.status(400).send('Incorrect email or password');
                    }
                    else{
                        res.send(doc)
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