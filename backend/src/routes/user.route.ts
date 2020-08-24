import { Router } from 'express';
const UserService =  require ('../services/user');
import UserController from '../controllers/user';

const user = Router();

const userControllerInstance = new UserController(new UserService());

user.get('/blogger', (req, res, next) => {
    userControllerInstance.getBlogger(req, res, next);
});

user.get('/customer', (req, res, next) => {
    userControllerInstance.getCustomer(req, res, next);
});

export default user;