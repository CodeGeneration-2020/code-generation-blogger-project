import mongoose from 'mongoose';


export type CityDocument = mongoose.Document & {
    name:String;
};

const citySchema = new mongoose.Schema({
    name:mongoose.Schema.Types.String,
});

export const City = mongoose.model<CityDocument>('Cities', citySchema);