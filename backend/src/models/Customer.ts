import mongoose, { Schema } from 'mongoose';
import { IOption } from './Blogger';

export type CustomerDocument = mongoose.Document & {
        _id: number;
        name: String;
        surname: String;
        profile_picture: String;
        location: {
                country: IOption;
                city: IOption;
        };
        contact: {
                mail: String;
                phone: String;
                link: String;
        }
};

const customerSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.Number,
        name: Schema.Types.String,
        surname: Schema.Types.String,
        profile_picture: Schema.Types.String,
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
        contact:{
                mail: Schema.Types.String,
                phone: Schema.Types.String,
                link: Schema.Types.String,
        }
}, { timestamps: true, _id: false });

export const Customer = mongoose.model<CustomerDocument>('Customers', customerSchema);
