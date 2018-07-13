'use strict';
import auth from '../../../middlewares/user/authorization';
import register from '../../../middlewares/user/registration';

const router = require('express').Router();


router.get('/', auth);
router.post('/', auth);
router.get('/:userId', auth);
router.put('/:userId', auth);
router.delete('/:userId', register);

module.exports = router;

