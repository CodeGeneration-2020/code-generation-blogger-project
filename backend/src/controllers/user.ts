import {IUserService} from '../services/user';
import { Request, Response, NextFunction } from 'express';


class User {

    constructor(public userService: IUserService ) {
       
    }

    async getBlogger(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.getBlogger(+req.query.id);
            res.json(users);
        } catch (e) {
            return next(e);
        }

    }

    async getCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.getCustomer(+req.query.id);
            res.json(users);
        } catch (e) {
            return next(e);
        }

    }
}

export default User;