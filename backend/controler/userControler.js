let User = require('../models/User.model');

module.exports.registration_post = async (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const PhoneNumber = req.body.PhoneNumber;
    const BirthDate = req.body.BirthDate;
    const Role = req.body.Role;


    try {
        const user = await User.create({
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
        res.status(400).json(err);
    }

}