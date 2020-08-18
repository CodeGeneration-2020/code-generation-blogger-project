import { Application } from "express";

import { ROUTES } from "../consts";
import home from "./home.route";
import registration from "./registration.route";
import user from "./user.route";
import users from "./users.route";

export default (app: Application) => {
    app.use(ROUTES.HOME, home);
    app.use(ROUTES.REGISTRATION, registration);
    app.use(ROUTES.USER,user);
    app.use(ROUTES.USERS,users);
};
