import mongoose, { Schema } from "mongoose";

export type UserDocument = mongoose.Document & {
        id: number;
        userType: string;
        accessToken: string;
        full_name: string;
        username: string;
        profile_picture: string;
        bio: string;
        website: string;
        counts: {
            media: number;
            follows: number;
            followed: number;
        };
};

const userSchema = new mongoose.Schema({
        id:mongoose.Schema.Types.ObjectId,
        userType:Schema.Types.String,
        accessToken:Schema.Types.String,
        full_name:Schema.Types.String,
        username:Schema.Types.String,
        profile_picture:Schema.Types.String,
        bio:Schema.Types.String,
        website:Schema.Types.String,
        counts:{
            media:Schema.Types.Number,
            follows:Schema.Types.Number,
            followed:Schema.Types.Number
        }
}, { timestamps: true });

export const User = mongoose.model<UserDocument>("User", userSchema);
