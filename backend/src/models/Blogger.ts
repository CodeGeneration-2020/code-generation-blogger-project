import mongoose, { Schema } from 'mongoose';

export interface IOption {
        label:String;
        value:String;
}

export type BloggerDocument = mongoose.Document & {
        _id: number;
        ig_id: number;
        username: string;
        full_name: string;
        profile_picture: string;
        biography: string;
        website: string;
        metric: {
                media: number;
                follows: number;
                followers: number;
                er: number;
        };
        storyPrice: number|undefined;
        postPrice: number|undefined;
        pricePS: number|undefined;
        location: {
                country:IOption[];
                city:IOption[];
        };
        tags: IOption[];
        sex: string|undefined;
        commentId: Number;
};


const userSchema = new mongoose.Schema({
        _id:mongoose.Schema.Types.Number,
        ig_id:mongoose.Schema.Types.Number,
        username:Schema.Types.String,
        full_name:Schema.Types.String,
        profile_picture:Schema.Types.String,
        biography:Schema.Types.String,
        website:Schema.Types.String,
        metric:{
         media:Schema.Types.Number,
         follows:Schema.Types.Number,
         followers:Schema.Types.Number,
         er:Schema.Types.Number,
        },
        storyPrice:Schema.Types.Number,
        postPrice:Schema.Types.Number,
        pricePS:Schema.Types.Number,
        location:{
                country:{
                        label:Schema.Types.String,
                        value:Schema.Types.String
                },
                city:{
                        label:Schema.Types.String,
                        value:Schema.Types.String
                }
        },
        tags: [{
                _id:false,
                label:Schema.Types.String,
                value:Schema.Types.String
        }],
        sex:Schema.Types.String,
        commentId: {type:Number, ref: 'Comments'}
}, { timestamps: true ,_id:false});

export const Blogger = mongoose.model<BloggerDocument>('Bloggers', userSchema);
