import {User} from "../models/User";

class UsersService {
    async getBlogger(id: number) {
        return User.findById(id);
    }
    async getCustomer(id: number) {
        return User.findById(id);
    }
}

export interface IUserService{
    getBlogger: any;
    getCustomer: any;
}

module.exports =  UsersService;