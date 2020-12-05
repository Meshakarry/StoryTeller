const mongoose =require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const userModel=new mongoose.Schema({
    userName : {
        type: String,
        required:[true,"Molimo unesite Username"],
        unique:true,
        trim:true,
        minlength:[5, "Username mora imati minimalno 5 karakera"]

    },
    password : {
        type:String,
        required:[true,"Molimo unesite password"],
        trim:true,
        minlength:[8, "Password mora imati minimalno 8 karakera"],
        select:false
    },
    
    FirstName:{
        type: String,
        required:[true,"Molimo unesite Ime"],
        trim:true,
        minlength:[2, "Ime mora imati minimalno 2 karakera"],
    },
    LastName:{
        type: String,
        required:[true,"Molimo unesite Prezime"],
        trim:true,
        minlength:[2, "Prezime mora imati minimalno 2 karakera"],
    },
    PhoneNumber:{
        type: String,
        required:[true,"Molimo unesite Broj telefona"],
        trim:true,
        minlength:[9, "PhoneNumber mora imati minimalno 9 karakera"],
    },
    BirthDate:{
        type: Date,
        required:[true,"Molimo unesite Datum rodjenja"],
        trim:true
    },
    Role : {
        type: String,
        required:[true,"Molimo unesite Ulogu"],
        default:'user',
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