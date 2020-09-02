var User = require('../../models/user');

exports.userLIst = function(req, res){
    User.find({}, function(err, user){
        if(err) console.log(err);
        res.status(200).json({
            users: user
        });
    });
}


exports.user_create = function(req, res){
    var user= new User({firstname: req.body.firstname, lastname: req.body.lastname, admin: req.body.admin});
    user.save(function(err, result){
        if(err) return res.status(500).json(err);
        res.status(200).json(result); 
    });
}