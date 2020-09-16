import mongoose from 'mongoose';


export type TagsDocument = mongoose.Document & {
    tag:String;
};

const tagsSchema = new mongoose.Schema({
    tag:mongoose.Schema.Types.String,
});

export const Tags = mongoose.model<TagsDocument>('Tags', tagsSchema);
