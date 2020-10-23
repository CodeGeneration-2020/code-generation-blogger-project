import { Router } from 'express';
import UserService from '../services/user';
import UserController from '../controllers/user';

const user = Router();

const userControllerInstance = new UserController(new UserService());

user.get('/blogger/:id', (req, res, next) => {
    userControllerInstance.getBlogger(req, res, next);
});

user.get('/blogger/:id/comments', (req, res, next) => {
    userControllerInstance.getBloggerComments(req, res, next);
});

user.post('/blogger/:id/comment', (req, res, next) => {
    userControllerInstance.createCommentForBlogger(req, res, next);
});

user.post('/customer', (req, res, next) => {
    userControllerInstance.createCustomer(req, res, next);
});

user.get('/customer/:id', (req, res, next) => {
    userControllerInstance.getCustomerById(req, res, next);
});

user.put('/customer/:id', (req, res, next) => {
    userControllerInstance.updateCustomerById(req, res, next);
});

user.get('/customer/:id/comments', (req, res, next) => {
    userControllerInstance.getCustomerComments(req, res, next);
});

user.post('/customer/:id/comment', (req, res, next) => {
    userControllerInstance.createCommentForCustomer(req, res, next);
});


export default user;