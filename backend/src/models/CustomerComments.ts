import mongoose from 'mongoose';


export type CommentsDocumnet = mongoose.Document & {
    customerId:Number;
    bloggerId:Number;
    comment:String;
    score:Number;
};

const commentsSchema = new mongoose.Schema({
    customerId:{type: Number, ref: 'Customers'},
    bloggerId:{type: Number, ref: 'Bloggers'},
    comment:mongoose.Schema.Types.String,
    score: mongoose.Schema.Types.Number,
});

export const Comments = mongoose.model<CommentsDocumnet>('CustomerComments', commentsSchema);
