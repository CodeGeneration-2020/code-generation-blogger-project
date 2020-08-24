import { Blogger,BloggerDocument } from '../models/Blogger';

export interface IAuthService{
    authBlogger:(blogger:any)=>BloggerDocument;
}

class AuthService {
   async authBlogger(blogger:any){
        const newBlogger =  new Blogger({
            _id: blogger.id,
            ig_id: blogger.ig_id,
            username: blogger.username,
            full_name: blogger.name,
            profile_picture: blogger.profile_picture_url,
            biography: blogger.biography,
            website: blogger.website,
            metric:{
                    media: blogger.media_count,
                    follows: blogger.follows_count,
                    followers: blogger.followers_count,
            },
            storyPrice: blogger.storyPrice,
            postPrice: blogger.postPrice,
            location: "Kharkiv",
            tags: ['sport','meetings'],
            sex: 'male'
        })
        await newBlogger.save();
    }
}

export default AuthService;