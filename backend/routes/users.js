const router=require('express').Router();
let User=require('../models/User.model');
const userControler=require('../controler/userControler')
const cookieParser=require('cookie-parser');

// router.route('/').get((req,res)=>{
//     User.find().then(users=>res.json(users))
//                 .catch(err=>res.status(400).json('Error'+err));
// })

router.route('/').get( async (req,res)=>{
    try{
   const posts= await User.find();
   res.json(posts);
}catch(err){
    res.json('Error'+err)
}
})


router.post('/add',userControler.registration_post);



router.route('/:id').get((req,res)=>{
    User.findById(req.params.id).then((user)=>{
        res.json(user).
        catch((err)=>res.json('Eror'+err))
    })
})


router.route('/:id').delete(async(req,res)=>{
    try{
    await User.remove(req.params.id);
        res.json('Uspjesno obrisan');
    }catch(err){
        res.json('Error'+err);
    }
    })
        
    
router.route('/update/:id').post((req,res)=>{

    User.findById(req.params.id).then((user)=>{
        user.userName=req.body.userName;
        user.password=req.body.password;
        user.FirstName=req.body.FirstName;
        user.LastName=req.body.LastName;
        user.PhoneNumber=req.body.PhoneNumber;
        user.BirthDate=req.body.BirthDate;
        user.Role=req.body.Role;
    
        user.save().
        then(()=>res.json("dodan updated"))
        .catch(err=>res.status(400).json('Error'+err));
        
    }).catch(err=>res.json('error'+err));
  
});



module.exports=router;