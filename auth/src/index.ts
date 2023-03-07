import express from "express";
import "express-async-errors";
// routers
import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/sign-up";
import { signInRouter } from "./routes/sign-in";
import { signOutRouter } from "./routes/sign-out";
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import mongoose from "mongoose";

const server = express();
const port = process.env.PORT || 3000;
server.use(express.json({ limit: "50mb" }));

// router consumers
server.use("/api/auth", currentUserRouter);
server.use("/api/auth", signUpRouter);
server.use("/api/auth", signInRouter);
server.use("/api/auth", signOutRouter);

server.all("*", async (req, res) => {
  throw new NotFoundError();
});

server.use(errorHandler);

const start = async () => {
  try {
    await mongoose.set("strictQuery", false);
    // auth-mongo-srv is the domain name in auth auth-mongo-depl service
    // af od mongoose v6 no options are needed
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log(error);
  }

  // listen for incoming traffic
  server.listen(port, () => {
    console.clear();
    console.log("Auth Service is running successfully!");
    console.log("Service is listening on port " + port);
  });
};

start();
