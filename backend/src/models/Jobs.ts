import mongoose from 'mongoose';

export interface ITags{
    value:String;
    label:String;
}

export type JobsDocumnet = mongoose.Document & {
    customerId:Number;
    status:boolean;
    title:String;
    budget:Number;
    tags:ITags[];
    description:String;
    contact:{
        phone: String;
        email: String;
    };
    location: {
        country:string;
        city:string;
    };
    additional_contacts: String;
    attachments: String[];
};

const JobsSchema = new mongoose.Schema({
    customerId: {type: Number, ref: 'Customers'},
    status: mongoose.Schema.Types.Boolean,
    title: mongoose.Schema.Types.String,
    budget: mongoose.Schema.Types.Number,
    tags: Array,
    description: mongoose.Schema.Types.String,
    contact:{
        phone: mongoose.Schema.Types.String,
        email: mongoose.Schema.Types.String,
    },
    location:{
        country: mongoose.Schema.Types.String,
        city: mongoose.Schema.Types.String
    },
    additional_contacts: mongoose.Schema.Types.String,
    attachments: [{type: mongoose.Schema.Types.String}],
});

export const Jobs = mongoose.model<JobsDocumnet>('Jobs', JobsSchema);