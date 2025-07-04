import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import router from "../src/router/router";

const { PORT = 3000 } = process.env;

async function connect() {
  const app = express();
  app.use(express.json());


  //TODO тут временная заглушка в виде any!
  app.use((req: Request | any, res: Response, next: NextFunction) => {
    req.user = {
      _id: "68667132f4ed79e362e5b120",
    };
    next();
  });

  app.use(router);

  await mongoose.connect("mongodb://localhost:27017/mestodb");
  console.log("CONNECTION SUCCESS!");

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

connect();
