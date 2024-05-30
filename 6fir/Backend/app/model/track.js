const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const RecordSchema = mongoose.Schema(
    {
        track: [{
            distance: String,
            duration : String,
            speed : String,
            date : Date
        }],
        userId:  {
            type : mongoose.Schema.Types.ObjectId, 
            ref : 'User'
        }
        
    },{
        timestamps : true
    }     
)
module.exports = mongoose.model('Record',RecordSchema);