import {Customer,CustomerDocument} from '../models/Customer';
import {Blogger,BloggerDocument} from '../models/Blogger';
import {Comments as BlogerComments, CommentsDocumnet as BloggerCD} from '../models/BloggerComments';
import {Comments as CustomerComments, CommentsDocumnet as CustomerCD} from '../models/CustomerComments';

export interface ICreateCommentBlogger{
    senderId: Number;
    comment: String;
    score: Number;
    subs_came: Number;
}

export interface ICreateCommentCustomer{
    senderId: Number;
    comment: String;
    score: Number;
}

export interface IAverageDataBlogger {
    averageComing: number;
    averageScore: number;
}

export interface IUserService{
    getBlogger: (id: number) =>  Promise<BloggerDocument>;
    createCommentForBlogger: (id: number, body: ICreateCommentBlogger) => object;
    getBloggerComments: (id: number,skip: number,limit: number) => Promise<{ comments: BloggerCD[]; averageData: IAverageDataBlogger; }>;
    getCustomer: (id: number) =>  Promise<CustomerDocument>;
    createCommentForCustomer: (id: number, body: ICreateCommentCustomer) => Promise<any>
    getCustomerComments: (id: number, skip: number,limit: number) => Promise <{comments: CustomerCD[],averageScore: Number}>;
}

function callculateAvg (data:Number[]) {
    const countData:any =  data.reduce((a:number, b:number) => a + b, 0);
    return Math.round(countData / data.length);
}

async function calculateAverageDataBlogger (id:number): Promise<IAverageDataBlogger> {
    const allComments = await BlogerComments.find({bloggerId:id});
    const subsCame = allComments.map(e => e.subs_came);
    const score = allComments.map(e => e.score);
    return {averageComing:callculateAvg(subsCame),averageScore:callculateAvg(score)};
}

async function calculateAverageScoreCustomer (id:number) {
    const comments = await CustomerComments.find({customerId:id});
    const score = comments.map(e => e.score);
    return callculateAvg(score);
}

class UserService implements IUserService  {
    async getBlogger(id: number) {
        return Blogger.findOne({ig_id:id});
    }

    async createCommentForBlogger(id:number,body:ICreateCommentBlogger){
        const comment = new BlogerComments({
            customerId:body.senderId,
            bloggerId:id,
            comment:body.comment,
            score: body.score,
            subs_came: body.subs_came
        })
        await comment.save();
        return {createComment:'success'};
    }

    async getBloggerComments(id:number,skip: number,limit: number){
        const averageData = !skip ? await calculateAverageDataBlogger(id) : null;
        const comments = await BlogerComments.find({bloggerId:id}).populate('customerId').skip(+skip).limit(+limit);
        return {comments, averageData};
    }

    async getCustomer(id: number) {
        return Customer.findById(id);
    }

    async createCommentForCustomer(id:number,body:ICreateCommentBlogger){
        const comment = new CustomerComments({
            customerId: id,
            bloggerId: body.senderId,
            comment: body.comment,
            score: body.score,
        });
        const newComment = await comment.save();
        return await CustomerComments.findById(newComment._id).populate('bloggerId');
    }

    async getCustomerComments(id:number,skip: number,limit: number){
        const averageScore = !skip ? await calculateAverageScoreCustomer(id) : null;
        const comments = await CustomerComments.find({customerId:id}).sort({createdAt:-1}).populate('bloggerId').skip(+skip).limit(+limit);
        return {comments, averageScore};
    }
}

export default UserService;

