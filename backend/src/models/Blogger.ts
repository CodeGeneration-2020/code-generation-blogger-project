import mongoose, { Schema } from 'mongoose';

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
        };
        storyPrice: number|undefined;
        postPrice: number|undefined;
        location: {
                country:string;
                city:string;
        },
        tags: string[];
        sex: string|undefined;
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
        },
        storyPrice:Schema.Types.Number,
        postPrice:Schema.Types.Number,
        location:{
         country:Schema.Types.String,
         city:Schema.Types.String
        },
        tags: [{type: Schema.Types.String}],
        sex:Schema.Types.String
}, { timestamps: true ,_id:false});

export const Blogger = mongoose.model<BloggerDocument>('Bloggers2', userSchema);
