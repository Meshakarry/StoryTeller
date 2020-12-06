let User = require('../models/User.model');
const jwt=require('jsonwebtoken');
const HandleErrors = (err) => {
    const errors = {};
    if(err.code===11000){
        errors.userName="Username vec postoji";
        return errors;
    }
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;

}

const maxAge=3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},'ovo je neki secret',{
        expiresIn:maxAge
    })
}
module.exports.registration_post = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const PhoneNumber = req.body.PhoneNumber;
    const BirthDate = req.body.BirthDate;
    const Role = req.body.Role;


    try {
       const user= await User.create({
            userName,
            password,
            FirstName,
            LastName,
            PhoneNumber,
            BirthDate,
            Role
        });
        const token=createToken(user._id);
        res.cookie('jwt',token);
        res.status(201).json({user : user._id});

    }
    catch (err) {
       let error= HandleErrors(err);
        res.json(error);
    }

}