import { Router } from 'express';
import TagsService from '../services/tags';
import TagsController from '../controllers/tags';

const tags = Router();

const tagsControllerInstance = new TagsController(new TagsService());

tags.get('/', (req, res, next) => {
    tagsControllerInstance.getTags(req, res, next);
});

tags.post('/', (req, res, next) => {
    tagsControllerInstance.addTags(req, res, next);
});

export default tags;