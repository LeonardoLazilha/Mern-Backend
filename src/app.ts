import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { routes } from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
  }

  public middleware() {
    this.express.use(cors());
    this.express.use(express.json())
  }

  public async database() {
    try {
      await mongoose.connect("mongodb://localhost:27017/mern");
      console.log("Database connected sucessfull");
    } catch (error) {
      console.log("Cannot connect to database");
    }
  }

  public routes() {
    this.express.use(routes);
  }
}

export default new App().express;
