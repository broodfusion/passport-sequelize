var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
    
    res.render('signin');
    // console.log(req.user);
 
}

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
    // console.log(req.user);
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}