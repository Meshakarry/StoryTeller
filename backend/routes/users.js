const router=require('express').Router();
let User=require('../models/User.model');

router.route('/').get((req,res)=>{
    User.find().then(users=>res.json(users))
                .catch(err=>res.status(400).json('Error'+err));
})

router.route('/add').post((req,res)=>{
    const userName=req.body.userName;
    const password=req.body.userName;


    const user=new User({
        userName
    });

    user.save().
    then(()=>res.json("dodan korisnik"))
    .catch(err=>res.status(400).json('Error'+err));
});


module.exports=router;