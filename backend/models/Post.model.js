const mongoose =require('mongoose');

const postModel=new mongoose.Schema({
    title : {
        type: String,
        required:true,
        trim:true,
        minlength:3
    },
    bodi : {
        type: String,
        required:true,
        trim:true,
        minlength:10
    },
    date : {
        type:Date,
        required: true
    }
 }
 ,{timestamps : true});

module.exports=mongoose.model('Post',postModel);