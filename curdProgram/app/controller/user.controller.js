const userService = require('../services/user.services')
exports.user_create = function(req,res,next){
    try{
        req.assert('name','Name must be atleast three characters').len(3);
        req.assert('age','Age should not be empty').notEmpty();
        req.assert('address','Address must not be empty').notEmpty();
        req.assert('dateOfBirth','Date of birth must not be empty').notEmpty();
        var errors = req.validationErrors();
        if(errors){
            return res.status(400).send(errors)
        }
        else{
            userService.createUser(req,res)
        }
    }catch(error){
        res.send(error)
    }
}


exports.user_agecheck = function(req,res,next){
    try{
        req.assert('name','Name must be atleast three characters').len(3);
        req.assert('age','Age should not be empty').notEmpty();
        req.assert('address','Address must not be empty').notEmpty();
        req.assert('dateOfBirth','Date of birth must not be empty').notEmpty();
        var errors = req.validationErrors();
        if(errors){
            return res.status(400).send(errors)
        }
        else{
            userService.ageCheck(req,res)
        }
    }catch(error){
        res.send(error)
    }

}
