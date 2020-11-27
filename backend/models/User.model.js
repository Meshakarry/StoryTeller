const mongoose =require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const userModel=new mongoose.Schema({
   UserLogin:{
    type: ObjectId,
    ref : 'Login'
   },
    FirstName:{
        type: String,
        required:true,
        trim:true,
        minlength:2
    },
    LastName:{
        type: String,
        required:true,
        trim:true,
        minlength:2
    },
    PhoneNumber:{
        type: String,
        required:true,
        trim:true,
        minlength:9
    },
    BirthDate:{
        type: Date,
        required:true,
        trim:true
    },
    Role : {
        type: String,
        required:true,
        default:'User',
        enum : ['user','admin','root']
    }

},{timestamps:true})

module.exports=mongoose.model('User',userModel);