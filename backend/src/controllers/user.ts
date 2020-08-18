import {IUserService} from "../services/user";
import { Request, Response, NextFunction } from "express";
class User {
    usersService: IUserService;
    constructor(usersService: IUserService) {
        this.usersService = usersService;
    }

    async getBlogger(req: Request, res: Response, next: NextFunction) {
        try {

            const users = await this.usersService.getBlogger(req.body.id);

            res.send(users);

        } catch (e) {
            return next(e);
        }

    }

    async getCustomer(req: Request, res: Response, next: NextFunction) {
        try {

            const users = await this.usersService.getCustomer(req.body.id);

            res.send(users);

        } catch (e) {
            return next(e);
        }

    }
}

module.exports =  User;