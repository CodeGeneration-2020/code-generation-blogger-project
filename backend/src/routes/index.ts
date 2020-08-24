import { Application } from 'express';

import ROUTES  from '../consts/routes';
import home from './home.route';
import auth from './auth.route';
import users from './users.route';
import user from './user.route';


export default (app: Application) => {
    app.use(ROUTES.HOME, home);
    app.use(ROUTES.AUTH, auth);
    app.use(ROUTES.USERS, users);
    app.use(ROUTES.USER, user);
};
