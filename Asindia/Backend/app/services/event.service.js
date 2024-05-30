const User = require('../model/user.model');
const Event = require('../model/event.model');

exports.eventCreate = async function(req,res,next){
    var user = User.findOne(req.params.id)

    if(user){
        let event = new Event({
            time: req.body.time,
            date: req.body.date,
            userId: req.params.id
        })
        console.log(event.userId)
        var eventResponse = await Event.create(event)
            res.send({
               status : eventResponse.time + 'event added '
           })
    }
    else{
        res.send({
            status : userResponse.name + 'Not found'
        })
    }  
}

exports.findEvents = function(req,res){
    Event.find({userId : req.params.id})
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || 'Something error occured.'
    
        })
    })    
}

