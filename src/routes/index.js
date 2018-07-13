'use strict';
const routes = require('express').Router();
import postRoutes from './posts';


/*
routes.use('/users', loadRoutes);

routes.use('/comments', loadRoutes);
routes.use('/auth', authRoutes);

*/
routes.use('/posts', postRoutes);

module.exports = routes;


