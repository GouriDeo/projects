const User = require('../model/user.model');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

exports.signUp = async function(req,res,next){
    var userExist = await User.findOne({
        email: req.body.email        
    })

    if(userExist){
        res.send({
            message:'User already exists, try different email id'
        })
    }

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })
    await bcrypt.hash(req.body.password,bcrypt.genSaltSync(10),null,async function(err,hash){
        if(err){
            throw err
        }
        else{
            user.password = hash
        }

        let userResponse = await User.create(user)

        res.send({
           status : userResponse.name + 'Registered'
       })
    })
}

exports.login = async function(req,res){
    try{
        var userExists = await User.findOne({
            email:req.body.email
        })
        if(userExists){
            if(bcrypt.compareSync(req.body.password,userExists.password)){
                
                const payload = {
                    _id : userExists._id,
                    email: userExists.email,
                    name : userExists.name
                }

                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn:1140
                })
                res.json({token:token})
                console.log(token);

            }else{
                res.status(401).send({
                    message : "Worng password"
                })
            }
        }
        else{
            res.status(401).send({
                message : "Invalid email"
            })
        }
    }
    catch(err){
        res.send(err)
    }
}