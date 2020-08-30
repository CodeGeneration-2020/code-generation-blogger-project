import {IUserService} from '../services/user';
import { Request, Response, NextFunction } from 'express';

const dataCity = [
    { city: 'Kiev', users: 500 },
    { city: 'Lviv', users: 260 },
    { city: 'Kharkiv', users: 142 },
    { city: 'Dnepro(город)', users: 14 },
    { city: 'Tokio', users: 2 },
    { city: 'Druzhkovka', users: 79 },
    { city: 'Lutsk', users: 7 },
    { city: 'London', users: 452 },
  ];
  const dataAge = [
    { age: '13-17', users: 1 },
    { age: '18-24', users: 706 },
    { age: '25-34', users: 902 },
    { age: '35-44', users: 290 },
    { age: '45-54', users: 80 },
    { age: '55-64', users: 1 },
    { age: '64+', users: 20 },
  ];
  
  const dataSex = {
    men: 400,
    women: 600,
  };
  

class User {

    constructor(public userService: IUserService ) {
       
    }

    async getBlogger(req: Request, res: Response, next: NextFunction) {
        try {
            const bloggerData = await this.userService.getBlogger(+req.params.id);
            res.json({bloggerData,dataCity,dataSex,dataAge});
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