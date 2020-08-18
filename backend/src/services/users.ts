import {User} from "../models/User";

class UsersService {
    async getAllBloggers() {
        return User.find({ "instagram.userType": "blogger" });
    }
    async getAllCustomers() {
        return User.find({ "instagram.userType": "customer" });
    }
}

export interface IUsersService{
    getAllBloggers: any;
    getAllCustomers: any;
}

module.exports = UsersService;