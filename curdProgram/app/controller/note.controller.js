const noteService = require('../services/note.services');
exports.note_create = function(req,res,next){
    try{
        console.log('In controller')
        req.assert('name','name must be atleast 3 characters').len(3);
        req.assert('city','city should not be empty').notEmpty();
        var errors =req.validationErrors();
        if(errors){
            return res.status(400).send(errors)
        }
        else{
            console.log('In else part')
            noteService.createNote(req,res)
        }
    }catch(error){
        res.send(error);
    }  
}
exports.findNotes = function(req,res){
   return noteService.findNotes(req,res)
}

exports.searchNotes = function(req,res,next){
    try{
        console.log('In controller')
        req.assert('name','name must be atleast 3 characters').len(3);
        req.assert('city','city should not be empty').notEmpty();
        var errors =req.validationErrors();
        if(errors){
            return res.status(400).send(errors)
        }
        else{
            console.log('In else part')
            noteService.createUniqueRecord(req,res)
        }
    }catch(error){
        res.send(error);
    }  
}

exports.findOne = function(req,res,next){
    req.assert('id','ID cant be empty').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        return res.ststus(400).send(errors)
    }
    else{
        noteService.findOne(req,res)
    }
}

exports.updateNote = function(req,res,next){
    try{
        console.log('In controller')
        req.assert('name','name must be atleast 3 characters').len(3);
        req.assert('city','city should not be empty').notEmpty();
        req.assert('id','ID cant be empty').notEmpty();
        var errors =req.validationErrors();
        if(errors){
            return res.status(400).send(errors)
        }
        else{
            console.log('In else part')
            noteService.updateNote(req,res)
        }
    }catch(error){
        res.send(error);
    }  
}

exports.delete = function(req,res,next){
    req.assert('id','ID cant be empty').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        return res.ststus(400).send(errors)
    }
    else{
        noteService.delete(req,res)
    }
}













