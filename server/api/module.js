//-----------------------------------------------------------------------------//
// API Routes
//-----------------------------------------------------------------------------//

const api = function(app){
    require('./user.js')(app)
    require('./rank.js')(app)
    require('./summary.js')(app)
    require('./setting.js')(app)
    require('./signup.js')(app)
    require('./login.js')(app)
    require('./store.js')(app)
}

//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

module.exports = api;

//-----------------------------------------------------------------------------//