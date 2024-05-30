var User = require('../Models/user.model')
exports.createUser = (req,res) => {
    if(!req.body.name){
        return res.status(400).send({
            message:'User content not be empty'
        })
    }
    const user = new User({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        dateOfBirth:req.body.dateOfBirth
    })
    user.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || 'something error occured'
        })
    })
}
exports.ageCheck = (req,res) => {
    const year = req.body.dateOfBirth
    var birthdate = new Date(year)
    var today = new Date();
    var calculatedAge = today.getFullYear()-birthdate.getFullYear();
    if(calculatedAge<18){
        return res.status(400).send({
            message:'Age should be 18'
        })
    } 
    else{
        const user = new User({
            name:req.body.name,
            age:calculatedAge,
            address:req.body.address,
            dateOfBirth:req.body.dateOfBirth
        })
        user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || 'something error occured'
            })
         })
    }
}