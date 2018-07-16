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
    if (!post) throw new Error(`Post was not updated, cannot find post with id :${postId}`);

    await post.save({...data, updated_at: date}, {method: 'update'});
    res.status(200).send(post);
});

module.exports.getPost = asyncHandler(async (req, res) => {
    let postId = req.params.postId;
    let post = await new Post().where({id: postId}).fetch();

    if (!post) throw new Error(`Cannot find post with id :${postId}`);
    res.status(200).send(post);
});

module.exports.deletePost = asyncHandler(async (req, res) => {
    let postId = req.params.postId;
    await new Post().where({id: postId}).destroy();

    res.status(200).send(`Post with id: ${postId}  have been successfully deleted`);
});


module.exports.getAllPost = asyncHandler(async (req, res) => {
    let post = await  Post.forge({}).fetchAll();

    if (!post.length) throw new Error('Cannot find posts');
    res.status(200).send(post.toJSON());
});











