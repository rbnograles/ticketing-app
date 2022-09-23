import express from "express";
// routers
import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/sign-up";
import { signInRouter } from "./routes/sign-in";
import { signOutRouter } from "./routes/sign-out";

const server = express();
const port = process.env.PORT || 3000;
server.use(express.json({limit: '50mb' }));

// router consumers
server.use('/api/users', currentUserRouter);
server.use('/api/users', signUpRouter);
server.use('/api/users', signInRouter);
server.use('/api/users', signOutRouter);

// server start script
server.listen(port, () => { 
    console.clear();
    console.log("Auth Service is running successfully!");
    console.log("Service is listening on port " + port); 
});