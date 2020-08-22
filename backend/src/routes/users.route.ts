import { Router } from 'express';
const UsersService = require('../services/users');

import UsersController from '../controllers/users';

const users = Router();

const usersControllerInstance = new UsersController(new UsersService());

users.get('/customers', (req, res, next) => {
    usersControllerInstance.getAllCustomers(req, res, next);
});

users.get('/bloggers', (req, res, next) => {
   usersControllerInstance.getAllBloggers(req, res, next);
});

users.get('/filters/bloggers',(req, res, next) => {
    usersControllerInstance.getBloggersByFilters(req, res, next);
 });

export default users;

