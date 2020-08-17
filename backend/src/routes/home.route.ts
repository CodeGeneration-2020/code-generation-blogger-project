import { Router } from "express";

const home = Router();

home.get("/", (req, res, next) => {
    res.send("Works Fine!");
});


export default home;
