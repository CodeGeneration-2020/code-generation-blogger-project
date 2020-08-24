import { Request, Response, NextFunction } from 'express';
import {IinstagramService} from '../services/insta.service';
import {IAuthService} from '../services/auth.service';

const accessToken = 'FAKE_ACCESS_TOKEN';
const ig_user_id =  '17841405309211844';

const queryInsights = {
    ig_user_id,
    accessToken,
    metric:['impressions','reach','profile_views'],
    period:'day',
};

class AuthController {
   
    constructor(public instagramService: IinstagramService, public authService: IAuthService){
        
    }
    async authBlogger(req: Request, res: Response, next: NextFunction){
        try {
            // const businessDiscovery = await this.instagramService.getBusinessDiscovery(ig_user_id);
            // const insights =  await this.instagramService.getInsights(queryInsights);
            // console.log(businessDiscovery,insights);
            await this.authService.authBlogger(req.body.blogger);
            res.json({succes:"Success authenticated"});
        } catch (e) {
            return next(e);
        }
    }
}

export default AuthController;