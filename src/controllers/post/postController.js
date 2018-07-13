'use strict';
import Post from '../../models/post';

module.exports.addPost = (req, res) => {


    let data = req.body;
    Post.forge().save(data).then(function (post) {
        post;
    }).catch(err =>
        console.log(err)
    );

    res.status(200).send();
};




