const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const EventSchema = mongoose.Schema(
    {
        time: {
            type : String,
        },
        date: { 
            type: String,  
        },
        userId:  {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'User'
        }
    },{
        collection :'event',
        timestamps : true
    }     
)
module.exports = mongoose.model('Event',EventSchema);