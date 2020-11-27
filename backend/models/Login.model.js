const mongoose = require('mongoose');

const loginModel=new mongoose.Schema({
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
    }
    
},{
    timestamps:true
});
const Login=mongoose.model('Login',loginModel);
module.exports=Login;