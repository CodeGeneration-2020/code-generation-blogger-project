import { Customer,CustomerDocument } from '../models/Customer';
import { Blogger,BloggerDocument } from '../models/Blogger';

export interface Ifilters{
    country:string;
    city: string;
    storyPrice: string;
    postPrice: string;
    pricePS: string;
    followers:string;
    er: string;
    tags: string;
    sex: string;
    skip: string;
    limit: string;
}

export interface IUsersService{
    getAllBloggers: (limit: number,skip: number) => Promise<BloggerDocument[]>;
    getAllCustomers: (limit: number,skip: number) => Promise<CustomerDocument[]>;
    getBloggersByFilters: (filters: any) => Promise<BloggerDocument[]>;
}

class UsersService {
    async getAllBloggers(limit: number,skip: number) {
      return Blogger.find().skip(skip).limit(limit);
    }
    async getAllCustomers(limit: number,skip: number) {
        return Customer.find().skip(skip).limit(limit);
    }
    async getBloggersByFilters(filters: Ifilters){
        const storyPrice = filters.storyPrice && JSON.parse(filters.storyPrice);
        const postPrice = filters.postPrice && JSON.parse(filters.postPrice);
        const pricePS = filters.pricePS && JSON.parse(filters.pricePS);
        const followers = filters.followers && JSON.parse(filters.followers);
        const er = filters.er && JSON.parse(filters.er);
        const tags = filters.tags.length>2 && JSON.parse(filters.tags);
        const country = filters.country.length>2  && JSON.parse(filters.country);
        const city = filters.city.length>2 && JSON.parse(filters.city);
        const sex =  filters.sex && JSON.parse(filters.sex);
    
        return await Blogger.find({
            storyPrice: storyPrice ?  {$gte:+storyPrice[0], $lte:+storyPrice[1]} : {$ne:+storyPrice},
            postPrice: postPrice ? {$gte:+postPrice[0], $lte:+postPrice[1]} : {$ne:+postPrice},
            pricePS: pricePS ? {$gte:+pricePS[0], $lte:+pricePS[1]} : {$ne:+pricePS}, 
            "metric.followers": followers ? {$gte:+followers[0], $lte:+followers[1]} : {$ne:followers},
            "metric.er": er ? {$gte:+er[0], $lte:+er[1]} : {$ne:er},
            'tags.value' : tags ? { $in: tags } : {$ne:+tags},
            'sex' : sex ? sex : {$ne:sex},
            "location.country.value":country ? {$in:country} : {$ne:country},
            "location.city.value":city ? {$in:city} : {$ne:city},
        }).skip(+filters.skip).limit(+filters.limit);
    }
}

export default UsersService;

