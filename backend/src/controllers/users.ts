import {IUsersService} from "../services/users";
import { Request, Response, NextFunction } from "express";


class Users {
    usersService: IUsersService;
    constructor(usersService: IUsersService) {
        this.usersService = usersService;
    }

    async getAllBloggers(req: Request, res: Response, next: NextFunction) {
        try {

            const users = await this.usersService.getAllBloggers();

            res.send(users);

        } catch (e) {
            return next(e);
        }

    }

    async getAllCustomers(req: Request, res: Response, next: NextFunction) {
        try {

            const users = await this.usersService.getAllCustomers();

            res.send(users);

        } catch (e) {
            return next(e);
        }

    }
}

module.exports =  Users;