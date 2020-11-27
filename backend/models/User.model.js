const mongoose =require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const userModel=new mongoose.Schema({
    userName : {
        type: String,
        required:true,
        unique:true,
        trim:true,
        minlength:5

    },
    password : {
        type:String,
        required:true,
        trim:true,
        minlength:8,
        select:false
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
    },
    Posts: [
        {
          type: ObjectId,
          ref :'Post'
        }
    ]

},{timestamps:true})

module.exports=mongoose.model('User',userModel);