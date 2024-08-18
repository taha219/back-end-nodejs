//import mongoose
const mongoose = require('mongoose');

const user=mongoose.model('User',{
    Fname:{type:String},
    Lname:{type:String},
    age:{type:Number},
})
module.exports=user;