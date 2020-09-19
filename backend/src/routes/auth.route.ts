import { Router } from 'express';
import AuthController from '../controllers/authController';
import AuthService from '../services/auth.service';
import InstagramService from '../services/insta.service';

const auth = Router();

const instaService = new InstagramService();
const instanceAuthService = new AuthService();
const authController = new AuthController(instaService,instanceAuthService);


auth.post('/blogger/', (req, res, next) => {
    authController.authBlogger(req,res,next);
});

export default auth;
