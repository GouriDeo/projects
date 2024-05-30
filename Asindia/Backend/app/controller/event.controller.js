const eventService = require('../services/event.service')

exports.eventCreate = function(req,res){
    req.assert('time', 'Email is not valid').notEmpty();
    req.assert('date', 'Email cannot be blank').notEmpty();
    var errors = req.validationErrors();
        if (errors) { 
            return res.status(400).send(errors);
         }
         else{
             eventService.eventCreate(req,res)
         } 
}

exports.findEvents = function(req,res){
    return eventService.findEvents(req,res)
 }