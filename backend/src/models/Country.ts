import mongoose from 'mongoose';


export type CountryDocument = mongoose.Document & {
    name:String;
};

const countrySchema = new mongoose.Schema({
    name:mongoose.Schema.Types.String,
});

export const Country = mongoose.model<CountryDocument>('Countries', countrySchema);
