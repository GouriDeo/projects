var crypto = require('crypto');
var nodemailer = require('nodemailer');
var User = require('../models/user.model')
var bcrypt = require('bcrypt-nodejs') 
var Token = require('../models/token.model')
var eventEmitter = require('../../events/event')
var jwt = require('jsonwebtoken')
exports.signUp = async function(req, res, next) {
    /**
     * Gets users details with repective email id
     * Basically we are using this to find unique email id
     */
    var userExist = await User.findOne({
        email: req.body.email        
    })
    /**
     * If user alredy exists it will throw an error that emial id should be unique
     */
    if(userExist){
        res.send({
            message:'User already exists, try different email id'
        })
    }
    /**
     * Creating an object of User model and assigning the values which 
     * received from client side
     */
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    })
    /**
     * Encrypting the plain text password to store in data base
     */
    await bcrypt.hash(req.body.password,bcrypt.genSaltSync(10),null,async function(err,hash){
        if(err){
            throw err
        }
        else{
            user.password = hash
        }
        /**
         * Creating a record in database using mangoose create method
         */
        let userResponse = await User.create(user)
        /**
         * Creating an object of Token model and assigning the user id
         * which we get after creating record of user in database and
         * creating token by crypto method.
         */
        var token = await new Token({
            _userId: userResponse._id,
            token: crypto.randomBytes(16).toString('hex')
        })
        /**
         * Creating the record of token in the database 
         * If it is successful event is triggered to send email
         */
        await token.save(async function(err){
            if(err){
                return res.status(500).send({
                    message: err.message
                })
            }
            else{
                let subject = 'account verification token'
                let text = token.token
                eventEmitter.emit('sendEmail',subject,user,text)
                
            }
        })
        res.send({
            status: userResponse.name+' registered'
        })
    }) 
}

exports.confirmAccount = async function(req,res){
   var tokenData = await Token.findOne({token:req.params.token})
   if(!tokenData){
       return res.send({
           message:'Inavalid token pass'
       })
   }
   var userData = await User.findOne({
       _id:tokenData._userId
   }) 
   if(!userData){
       return res.status(401).send({
           message:'User does not exists, may be account is deleted'
       })
   }
   if(userData.isVerified){
       return res.send({
           message:'User is already verified'
       })
   }
   userData.isVerified = true
   userData.save()
   .then((resForVerify) => {
       return res.send({
           message:'account verified'
       })
   })
   .catch(err => {
       return res.send(err);
   })
}

exports.login = async function(req,res){
    try{
        var userExists = await User.findOne({
            email:req.body.email
        })
        if(userExists){
            if(bcrypt.compareSync(req.body.password,userExists.password)){
                if(!userExists.isVerified){
                    return res.status(400).send({
                        message : 'User is not verified'
                    })
                }
                const payload = {
                    _id : userExists._id,
                    email: userExists.email,
                    name : userExists.name
                }

                let token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn:1140
                })
                res.send(token)
            }
            else{
                return res.status(401).send({
                    message:'Invalid password'
                })
            }
        }
        else{
            res.status(401).send({
                message : 'Invalid user address please check'
            })
        }
    }
    catch(error){
        throw error
    }
    
}
//forget Password
exports.forgetPassword = async function(req,res){
    var userExist = await User.findOne({
        email: req.body.email        
    })
    if(!userExist){
        return res.status(401).send({
            message:'User does not exists, may be account is deleted'
        })
    }   
    
    var token = await new Token({
        _userId: userExist._id,
        token: crypto.randomBytes(16).toString('hex')
    })

    await token.save( function(err){
        if(err){
            return res.status(500).send({
                message: err.message
            })
        }
        else{
            let subject = 'account verification token'
            let text = token.token
            eventEmitter.emit('sendEmail',subject,userExist,text)
            
        }
    })
    res.send({
        status: userExist.email+' token is send'
    })           
}

/* exports.updatePassword = async function(req,res){
    var tokenData = await Token.findOne({token:req.params.token})
    if(!tokenData){
       return res.send({
           message:'Inavalid token pass'
       })
    }
    var userData = await User.findOne({
        _id:tokenData._userId
    })
    await bcrypt.hash(req.body.password,bcrypt.genSaltSync(10),null,async function(err,hash){
        if(err){
            throw err
        }
        else{
            userData.password = hash
        }
    })
    userData.save();
        res.send({
            message:'password is changed'
        })     
}
 */

 exports.updatePassword = async function(req,res){
     var userToken = await Token.findOne({
         token:req.params.token
        })
        if(userToken){
            var user = await User.findOne({
                _id:userToken._userId
            })
            if(user){
                await bcrypt.hash(req.body.password,bcrypt.genSaltSync(10),null,async function(err,hash){
                    if(err){
                        throw err
                    }
                    else{
                        user.password = hash
                    }
                })
                user.save(function(err) {
                    if(err){
                        return res.status(500).send({
                            message:'Something went wrong.'
                        })
                    }
                    else{
                        return res.status(200).send({
                            message:'Password reset successfully.'
                        })
                    }
                })

            }
            else{
                return res.status(401).send({
                    message:'User does not exists.'
                })
            }
        }
 }