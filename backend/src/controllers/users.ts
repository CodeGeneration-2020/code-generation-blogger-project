import {IUsersService} from '../services/users';
import { Request, Response, NextFunction } from 'express';


class Users {
    
    constructor(public usersService: IUsersService) {
    }

    async getAllBloggers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.usersService.getAllBloggers(+req.query.limit,+req.query.skip);
            res.json(users);
        } catch (e) {
            return next(e);
        }
    }

    async getBloggersByFilters(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.usersService.getBloggersByFilters(req.query);
            res.json(users);
        } catch (e) {
            return next(e);
        }
    }

    async getAllCustomers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.usersService.getAllCustomers(+req.query.limit,+req.query.skip);
            res.json(users);
        } catch (e) {
            return next(e);
        }

    }
}

export default Users;