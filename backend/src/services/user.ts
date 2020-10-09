import {Customer,CustomerDocument} from '../models/Customer';
import {Blogger,BloggerDocument} from '../models/Blogger';
import {Comments,CommentsDocumnet} from '../models/Comments';

export interface ICreateCommentBody{
    senderId: Number;
    comment: String;
    score: Number;
    subs_came: Number;
}

export interface IAverageData {
    averageComing: number;
    averageScore: number;
}

export interface IUserService{
    getBlogger: (id: number) =>  Promise<BloggerDocument>;
    createCommentForBlogger: (id: number, body: ICreateCommentBody) => object;
    getBloggerComments: (id:number,skip: number,limit: number) => Promise<{ comments: CommentsDocumnet[]; averageData: IAverageData; }>;
    getCustomer: (id: number) =>  Promise<CustomerDocument>;
}

async function calculateAverageData (id:number,skip:number): Promise<IAverageData> {
    if(!skip){
        let averageComing: number;
        let averageScore: number;
        const allCommnets = await Comments.find({bloggerId:id});
        const subsCame = allCommnets.map(e => e.subs_came);
        const countSubs:any = subsCame.reduce((a:number, b:number) => a + b, 0);
        averageComing = Math.round(countSubs / subsCame.length);
            
        const score = allCommnets.map(e => e.score);
        const countScore:any = score.reduce((a:number, b:number) => a + b, 0);
        averageScore = Math.round(countScore / score.length);
        return {averageComing,averageScore}
    }
    return null;
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
            score: body.score,
            subs_came: body.subs_came
        })
        await comment.save();
        return {createComment:'success'};
    }

    async getBloggerComments(id:number,skip: number,limit: number){
        const averageData = await calculateAverageData(id,skip);
        const comments = await Comments.find({bloggerId:id}).populate('customerId').skip(+skip).limit(+limit);
        return {comments, averageData};
    }

    async getCustomer(id: number) {
        return Customer.findById(id);
    }

}

export default UserService;

