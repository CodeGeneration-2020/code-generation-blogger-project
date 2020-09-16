import {Customer,CustomerDocument} from '../models/Customer';
import {Blogger,BloggerDocument} from '../models/Blogger';
import {Comments,CommentsDocumnet} from '../models/Comments';

export interface ICreateCommentBody{
    senderId:Number;
    comment:String;
}

export interface IUserService{
    getBlogger: (id: number) =>  Promise<BloggerDocument>;
    createCommentForBlogger: (id: number, body: ICreateCommentBody) => object;
    getBloggerComments: (id:number,skip: number,limit: number) =>  Promise<CommentsDocumnet[]>;
    getCustomer: (id: number) =>  Promise<CustomerDocument>;
}

class UserService implements IUserService  {
    async getBlogger(id: number) {
        return Blogger.findOne({ig_id:id});
    }

    async createCommentForBlogger(id:number,body:ICreateCommentBody){
        const comment = new Comments({
            customerId:body.senderId,
            bloggerId:id,
            comment:body.comment,
        })
        await comment.save();
        return {createComment:'success'};
    }

    async getBloggerComments(id:number,skip: number,limit: number){
        const comments = await Comments.find({bloggerId:id}).populate('customerId').skip(+skip).limit(+limit);
        return comments;
    }

    async getCustomer(id: number) {
        return Customer.findById(id);
    }

}

module.exports = UserService;

