'use strict';
import Post from '../../models/post';
import asyncHandler from 'express-async-handler';

module.exports.addPost = asyncHandler(async (req, res) => {


    let data = req.body;
    let post = await Post.forge().save(data);
    res.status(200).send(post);
});


module.exports.updatePost = asyncHandler(async (req, res) => {


    let data = req.body;
    let date = new Date();
    let postId = req.params.postId;
    let post = await new Post().where({id: postId}).fetch();
    if (!post) throw new Error('Cannot find post');

    await post.save({...data, updated_at: date}, {method: 'update'});
    res.status(200).send(post);
});

module.exports.getPost = asyncHandler(async (req, res) => {


    let postId = req.params.postId;
    let post = await new Post().where({id: postId}).fetch();
    if (!post) throw new Error('Cannot find post');
    res.status(200).send(post);
});

module.exports.deletePost = asyncHandler(async (req, res) => {


    let postId = req.params.postId;
    let post = await new Post().where({id: postId}).destroy();


    res.status(200).send(post);
});


module.exports.getAllPost = asyncHandler(async (req, res) => {

    let post = await  Post.where({user_id: 2}).fetch();
    if (!post) throw new Error('Cannot find post');

    res.status(200).send(post.toJSON());
});











