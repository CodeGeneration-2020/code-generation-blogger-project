import {Customer,CustomerDocument} from '../models/Customer';
import {Blogger,BloggerDocument} from '../models/Blogger';


export interface IUserService{
    getBlogger: (id: number) => BloggerDocument;
    getCustomer: (id: number) => CustomerDocument;
}

class UserService  {
    async getBlogger(id: number) {
        return Blogger.findOne({ig_id:id});
    }
    async getCustomer(id: number) {
        return Customer.findById(id);
    }
}

module.exports = UserService;