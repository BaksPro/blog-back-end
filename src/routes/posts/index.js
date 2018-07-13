'use strict';
import * as postaController  from '../../controllers/post/postController';
const router = require('express').Router();
router.post('/', postaController.addPost);
/*
router.get('/', auth);
router.get('/:userId', );

router.get('/:postId', auth);
router.put('/:postId', auth);
router.delete('/:postId', register);
*/
module.exports = router;

