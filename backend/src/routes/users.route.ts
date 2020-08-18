import { Router } from "express";
const UsersController = require("../controllers/users");
const UsersService = require("../services/users");
const users = Router();

const usersControllerInstance = new UsersController(new UsersService());

users.get("/customers", (req, res, next) => {
    usersControllerInstance.getAllCustomers();
});

users.get("/bloggers", (req, res, next) => {
   usersControllerInstance.getAllBloggers();
});

export default users;

