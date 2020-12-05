let User = require('../models/User.model');
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
module.exports.registration_post = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const PhoneNumber = req.body.PhoneNumber;
    const BirthDate = req.body.BirthDate;
    const Role = req.body.Role;


    try {
        await User.create({
            userName,
            password,
            FirstName,
            LastName,
            PhoneNumber,
            BirthDate,
            Role
        });
        res.status(201).json("dodavanje uspjelo");

    }
    catch (err) {
       let error= HandleErrors(err);
        res.json(error);
    }

}