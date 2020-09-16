import {Tags,TagsDocument} from '../models/Tag';

export interface ITagsService {
    getTags: () => Promise<TagsDocument[]>;
    addTag: (tagName:string) => Promise<string>;
}

class TagsService implements ITagsService {
    async getTags() {
        return Tags.find();
    }
    async addTag(tagName:string) {
        const tag = new Tags({
            tag:tagName
        });
        await tag.save();
        return "success";
    }
}

export default TagsService;

