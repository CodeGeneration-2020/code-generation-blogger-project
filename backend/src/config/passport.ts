//import passport from "passport";
import { User } from "../models/User";

import { Request, Response, NextFunction } from "express";
import passportInstagram from "passport-instagram";

const InstagramStrategy = passportInstagram.Strategy;
/**
 * Sign in with Instagram.
 */
export function initStrategy (passport: any){
passport.use(new InstagramStrategy({
    clientID: "1582327085279138",
    clientSecret: "117c166f3f26f37ecb4af9610de02174",
    callbackURL: "/auth/instagram/callback" 
  }, (accessToken: any, refreshToken: any, profile: any, done: any) => {
    User.findOne({ "instagram.id": profile.id }, function(err, user) {
  if (err) console.log("ERROR",err);
  if (user) {
            return done(null, user); // Check if user already exists
        }
  const {
        id,
        full_name,
        username,
        profile_picture,
        bio,
        website,
        counts: { media, follows, followed_by }
      } = profile._json.data;
  const new_user = new User({ 
        instagram: {
          id,
          accessToken,
          full_name,
          username,
          profile_picture,
          bio,
          website,
          counts: {
            media,
            follows,
            followed_by
          }
        }
      });
  new_user.save(function(err, user) { //saving a new user into mongo
        if (err) {
          throw err;
        }
        return done(null, user);
      });
    });
  }));
}

/**
 * Login Required middleware.
 */
// export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect("/login");
// };

// /**
//  * Authorization Required middleware.
//  */
// export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
//     const provider = req.path.split("/").slice(-1)[0];

//     const user = req.user as UserDocument;
//     if (_.find(user.tokens, { kind: provider })) {
//         next();
//     } else {
//         res.redirect(`/auth/${provider}`);
//     }
// };
