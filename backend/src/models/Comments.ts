import mongoose from 'mongoose';


export type CommentsDocumnet = mongoose.Document & {
    customerId:Number;
    bloggerId:Number;
    comment:String;
};

const commentsSchema = new mongoose.Schema({
    customerId:{type: Number, ref: 'Customers'},
    bloggerId:{type: Number, ref: 'Bloggers'},
    comment:mongoose.Schema.Types.String,
});

export const Comments = mongoose.model<CommentsDocumnet>('Comments', commentsSchema);
