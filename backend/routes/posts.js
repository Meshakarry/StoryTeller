const router = require('express').Router();
let Post = require('../models/Post.model');
let User = require('../models/User.model')
router.route('/').get((req, res) => {
    Post.find().then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {

    const title = req.body.title;
    const bodi = req.body.bodi;
    const date = Date(req.body.date);
    const user = req.body.user;

    const newPost = new Post({
        title,
        bodi,
        date,
        user
    });


    newPost.save().
    
        then(() => {
        return User.findById(user)
        // .catch(err => res.status(400).json('error' + err)
        }).then(user => {
          user.Posts.push(newPost)
            return user.save();
        }).then(()=>res.json("Dodavanje uspjesno"));

});

router.route('/:id').get((req,res)=> {
      Post.findById(req.params.id)
      .then(post=>res.json(post))
      .catch(err => res.status(400).json('Error' + err));

})


router.route('/:id').delete((req,res)=>{
    Post.findByIdAndDelete(req.params.id)
    .then(()=>res.json("uspjesno obrisan post"))
    .catch(err => res.status(400).json('Error' + err))
})

router.route('/update/:id').post((req,res)=>{
      Post.findById(req.params.id)
      .then(post=>{
        post.title=req.body.title,
        post.bodi=req.body.bodi,
        post.date=Date(req.body.date)
       
         post.save()
         .then(()=>res.json('Uspjesno editovan post'))
         .catch(err => res.status(400).json('Error' + err))
       })
       .catch(err => res.status(400).json('Error' + err))
       

        
       

     
});



module.exports = router;
