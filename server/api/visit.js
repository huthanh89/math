//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const User = require('../model/user.js');

//-----------------------------------------------------------------------------//
// API Route
//-----------------------------------------------------------------------------//

const route = function(app){

    app.get('/api/visit', function (req, res) {
        User.findOne({_id: req.query.userID})
            .select(['username', 'coin', 'rank', 'monsters'])
            .lean()
            .exec(function(err, doc){
                if(err){
                    res.status(400).send('Could not find player data');
                }else{
                    res.send(doc);
                }
            });
    });

}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = route;

//-----------------------------------------------------------------------------//