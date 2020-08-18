import passport from "passport";
import { Router } from "express";

const registration = Router();

registration.post("/bloger", (req, res, next) => {
    res.json({success:"Bloger registration!"});
});

registration.post("/customer", (req, res, next) => {
    res.json({success:"Customer registration!"});
});

registration.get("/auth/instagram", passport.authenticate("instagram"));
registration.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

export default registration;
