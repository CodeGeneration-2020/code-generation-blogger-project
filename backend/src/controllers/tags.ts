import { Request, Response, NextFunction } from 'express';
import { ITagsService } from './../services/tags';

class TagsController {
   
    constructor(public tagsService: ITagsService ) {
       
    }
    async getTags(req: Request, res: Response, next: NextFunction){
        try{
            const tags = await this.tagsService.getTags();
            res.json(tags);
        } catch (e) {
            return next(e);
        }
    }
    async addTags(req: Request, res: Response, next: NextFunction){
        try{
            const response = await this.tagsService.addTag(req.body.tag);
            res.json(response);
        } catch (e) {
            return next(e);
        }
    }
}

export default TagsController;