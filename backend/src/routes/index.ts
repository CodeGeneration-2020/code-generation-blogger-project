import { Application } from "express";

import { ROUTES } from "../consts";
import home from "./home.route";

export default (app: Application) => {
    app.use(ROUTES.HOME, home);
};
