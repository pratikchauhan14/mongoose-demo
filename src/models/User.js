const mongoose =  require('mongoose');


const User = mongoose.model('User',{
    email:{
        type:String,
        minLength:1,
        trim:true,
    },
    name:{
        type: String,
        minLength: 1,
        trim: true
    }
});

module.exports = {User};