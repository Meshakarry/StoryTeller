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



module.exports = router;
