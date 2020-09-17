import { Application } from 'express';

import ROUTES  from '../consts/routes';
import home from './home.route';
import auth from './auth.route';
import users from './users.route';
import user from './user.route';
import job from './job.route';
import tag from './tags.route';
import location from './location.route';

export default (app: Application) => {
    app.use(ROUTES.HOME, home);
    app.use(ROUTES.AUTH, auth);
    app.use(ROUTES.USERS, users);
    app.use(ROUTES.USER, user);
    app.use(ROUTES.JOB, job);
    app.use(ROUTES.TAGS, tag);
    app.use(ROUTES.LOCATION, location);
};
