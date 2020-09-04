import { Customer,CustomerDocument } from '../models/Customer';
import { Blogger,BloggerDocument } from '../models/Blogger';

interface Ifilters{
    country:string;
    city: string;
    storyPrice: string;
    postPrice: string;
    followers:string;
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
        const storyPrice = filters.storyPrice && filters.storyPrice.split(',');
        const postPrice = filters.postPrice && filters.postPrice.split(',');
        const followers = filters.followers && filters.followers.split(',');
        const tags = filters.tags && filters.tags!=='null' && filters.tags.split(',');
        const country = filters.country && filters.country!=='null' && filters.country.split(',');
        const city = filters.city && filters.city!=='null' && filters.city.split(',');
        const sex =  filters.sex && filters.sex!=='null' && filters.sex==='any' ? ['male','female'] : filters.sex;
        return await Blogger.find({
            storyPrice: storyPrice ?  {$gte:+storyPrice[0], $lte:+storyPrice[1]} : {$ne:storyPrice},
            postPrice: postPrice ? {$gte:+postPrice[0], $lte:+postPrice[1]} : {$ne:postPrice},
            "metric.followers": followers ? {$gte:+followers[0], $lte:+followers[1]} : {$ne:followers},
            tags: tags ? { $in: tags } : {$ne:tags},
            sex: sex ? { $in: sex } : {$ne:sex},
            "location.country":country ? {$in:country} : {$ne:country},
            "location.city":city ? {$in:city} : {$ne:city},
        }).skip(+filters.skip).limit(+filters.limit);
    }
}

module.exports = UsersService;

