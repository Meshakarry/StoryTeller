const router=require('express').Router();
let Post=require('../models/Post.model');

router.route('/').get((req,res)=>{
    Post.find().then(posts=>res.json(posts))
                .catch(err=>res.status(400).json('Error'+err));
});

router.route('/add').post((req,res)=>{

    const title=req.body.title;
    const bodi=req.body.bodi;
    const date=Date(req.body.date);
    const user=req.body.user;

    const newPost=new Post({
        title,
        bodi,
        date,
        user
    });

     
    newPost.save().then(()=>res.json('post added'))
                    .catch(err=>res.status(400).json('error'+err));

});



module.exports=router;
