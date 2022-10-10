import express from "express";
import "express-async-errors";
// routers
import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/sign-up";
import { signInRouter } from "./routes/sign-in";
import { signOutRouter } from "./routes/sign-out";
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const server = express();
const port = process.env.PORT || 3000;
server.use(express.json({ limit: "50mb" }));

// router consumers
server.use("/api/users", currentUserRouter);
server.use("/api/users", signUpRouter);
server.use("/api/users", signInRouter);
server.use("/api/users", signOutRouter);

server.use(errorHandler);

// server start script
server.listen(port, () => {
    console.clear();
    console.log("Auth Service is running successfully!");
    console.log("Service is listening on port " + port);
});
