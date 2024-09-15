import { Router } from "express";
import userController from "./controller/user.controller";

const routes = Router();

//create user
routes.post("/user", userController.create);

//read
routes.get("/user", userController.read);

//update
routes.put("/user/:id", userController.update);

//delete
routes.delete("/user/:id", userController.delete);

export { routes };
