const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    dateOfBirth:Date
},{
    timestamps:true
})
module.exports = mongoose.model('User',UserSchema);