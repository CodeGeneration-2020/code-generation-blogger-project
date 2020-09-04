import mongoose, { Schema } from 'mongoose';

export type CustomerDocument = mongoose.Document & {
        _id: number;
        ig_id: number;
        username: string;
        full_name: string;
        profile_picture: string;
        biography: string;
        website: string;
        commentId: Number;
};

const customerSchema = new mongoose.Schema({
        _id:mongoose.Schema.Types.Number,
        ig_id:mongoose.Schema.Types.Number,
        username:Schema.Types.String,
        full_name:Schema.Types.String,
        profile_picture:Schema.Types.String,
        biography:Schema.Types.String,
        website:Schema.Types.String,
        commentId: {type:Number, ref: 'Comments'},
}, { timestamps: true, _id:false });

export const Customer = mongoose.model<CustomerDocument>('Customers', customerSchema);
