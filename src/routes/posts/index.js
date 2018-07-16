'use strict';
import * as postaController from '../../controllers/post/postController';

const router = require('express').Router();
router.get('/', postaController.getAllPost);
router.get('/:postId', postaController.getPost);
router.post('/', postaController.addPost);
router.put('/:postId', postaController.updatePost);
router.delete('/:postId', postaController.deletePost);

module.exports = router;

