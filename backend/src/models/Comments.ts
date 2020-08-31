import mongoose from 'mongoose';
import {BloggerDocument} from './Blogger';
import {CustomerDocument} from './Customer';

export type CommentsDocumnet = mongoose.Document & {
    customerId:Number|BloggerDocument;
    bloggerId:Number|BloggerDocument;
    comment:String;
};

const commentsSchema = new mongoose.Schema({
    customerId:{type: Number, ref: 'Customers'},
    bloggerId:{type: Number, ref: 'Bloggers'},
    comment:mongoose.Schema.Types.String,
});

export const Comments = mongoose.model<CommentsDocumnet>('Comments', commentsSchema);
