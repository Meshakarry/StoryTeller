const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
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
        
    },
    
    FirstName:{
        type: String,
        required:[true,"Molimo unesite Ime"],
        trim:true,
        minlength:[2, "Ime mora imati minimalno 2 karaktera"],
    },
    LastName:{
        type: String,
        required:[true,"Molimo unesite Prezime"],
        trim:true,
        minlength:[2, "Prezime mora imati minimalno 2 karaktera"],
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
        
        default:'user',
        enum : ['user','admin','root']
    },
    Posts: [
        {
          type: ObjectId,
          ref :'Post'
        }
    ]

},{timestamps:true});

userModel.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

userModel.statics.login=async function(userName,password)
{
    const user=await this.findOne({userName});
    console.log(user);
    if(user)
    {
        const auth=await bcrypt.compare(password,user.password);
        if(auth)
        {
            console.log("usao u uslov")
            return user;
        }
        throw Error("Ivalid Password");
    }
    throw Error("Invalid username");
}
module.exports=mongoose.model('User',userModel);