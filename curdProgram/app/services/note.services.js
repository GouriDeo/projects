var Note = require('../Models/note.model');
 exports.createNote = (req,res) => {
    console.log('In services')
    if(!req.body.name){
        return res.status(400).send({
            message:'note content not be empty'
        })
    }
    const note = new Note({
        name:req.body.name,
        city:req.body.city
    })

   note.save()
    .then(data => {          
        console.log(data)
        res.send(data);           
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || 'Something error occured.'
        })
    })    
} 

exports.findNotes = function(req,res){
    Note.find()
    .then(notes => {
        res.send(notes)
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || 'Something error occured.'
    
        })
    })    
}

exports.createUniqueRecord = function(req,res){
    Note.findOne({name:req.body.name})
    .then((user) => {
        if(user){
            res.send({
                message: 'User already exists'
            })
        }
        else{
            const note = new Note({
                name:req.body.name,
                city:req.body.city
            })       
           note.save()
            .then(data => {          
                console.log(data)
                res.send(data);           
            })
            .catch(err => {
                res.status(500).send({
                    message:err.message || 'Something error occured.'
                })
            })
        }
    })
}

exports.findOne = (req,res) =>{
    Note.findById(req.params.id)
    .then(data => {
        if(data){
            res.send(data)
        }
        else{
            res.status(400).send({
                message: 'note not found'
            })
        }
    })
    .catch(err => {
        res.send(err)
    })
}

exports.updateNote = (req,res) => {
    if(!req.body.name){
        return res.status(400).send({
            message:'note content not be empty'
        })
    }
    Note.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        city:req.body.city
    },{new : true})
    .then(data => {
        if(data){
            res.send(data)
        }
        else{
            return res.status(400).send({
                message:'note not found'
            })
        }
    }) 
    .catch(err =>{
        res.send(err)
    } ) 
}

exports.delete = (req,res) => {
    Note.findByIdAndRemove(req.params.id)
    .then(status => {
        if(status){
            res.send({
                message: 'Record deleted successfully'
            })
        }
        else{
            res.send({
                message : 'Record not found'
            })
        }
    })
    .catch(err => {
        res.send(err);
    })
}












/* exports.searchNote = function(req,res){
    Note.find()
    .then(note => {
        if(note.name == req.body.name){
            res.status(400).send({
                message:'Name aleady present.'
            })            
        }
        else{
            const note = new Note({
                name:req.body.name,
                city:req.body.city
            })

            note.save()
             .then(data => {          
                console.log(data)
                res.send(data);           
            })
            .catch(err => {
                res.status(500).send({
                    message:err.message || 'Something error occured.'
                })
            })                      
        }
    })
}   */  







