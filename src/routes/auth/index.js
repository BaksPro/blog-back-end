'use strict';
import auth from '../../../middlewares/user/authorization';
import register from '../../../middlewares/user/registration';

const router = require('express').Router();


router.post('/login', auth);

router.post('/signup', register);

module.exports = router;
