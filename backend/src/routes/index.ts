import { Application } from 'express';

import home from './home.route';
import auth from './auth.route';
import users from './users.route';
import user from './user.route';

export default (app: Application) => {
    app.use('/home', home);
    app.use('/auth', auth);
    app.use('/users', users);
    app.use('/user', user);
};
