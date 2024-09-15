import { Request, Response } from "express";
import userService from "../service/user.service";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Error to create user.",
      });
    }
  }

  async read(req: Request, res: Response) {
    try {
      const findedUsers = await userService.read();
      return res.status(200).json(findedUsers);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Error to find users",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const newData = req.body;
      const updatedUser = await userService.update(id, newData);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Error to update user.",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.delete(id);
      return res.status(204).json(deletedUser);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Error to delete user.",
      });
    }
  }
}

export default new UserController();
