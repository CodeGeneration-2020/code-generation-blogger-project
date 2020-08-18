import { Router } from "express";

const user = Router();

user.get("/blogger:id", (req, res, next) => {
    res.json({success:"BLOGGER!"});
});

user.get("/customer:id", (req, res, next) => {
    res.json({success:"USER!"});
});

export default user;