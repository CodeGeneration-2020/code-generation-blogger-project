import { Customer,CustomerDocument } from '../models/Customer';
import { Blogger,BloggerDocument } from '../models/Blogger';

interface Ifilters{
    location: string;
    storyPrice: string;
    postPrice: string;
    tags: string;
    sex: string;
    skip: string;
    limit: string;
}

export interface IUsersService{
    getAllBloggers: (limit: number,skip: number) => BloggerDocument;
    getAllCustomers: (limit: number,skip: number) => CustomerDocument;
    getBloggersByFilters: (filters: Ifilters) => BloggerDocument;
}

class UsersService {
    async getAllBloggers(limit: number,skip: number) {
      return Blogger.find().skip(skip).limit(limit);
    }
    async getAllCustomers(limit: number,skip: number) {
        return Customer.find().skip(skip).limit(limit);
    }
    async getBloggersByFilters(filters: Ifilters){
        const storyPrice = filters.storyPrice.split(',');
        const postPrice = filters.postPrice.split(',');
        const tags = filters.tags.split(',');

        const bloggers = await Blogger.find({
            location:filters.location,
            storyPrice: {$gte:+storyPrice[0], $lte:+storyPrice[1]},
            postPrice: {$gte:+postPrice[0], $lte:+postPrice[1]},
            tags: { $in: tags },
            sex:filters.sex
        }).skip(+filters.skip).limit(+filters.limit);

        return bloggers;
    }
}

module.exports = UsersService;