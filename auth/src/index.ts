import express from "express";

const server = express();
const port = process.env.PORT || 3000;
server.use(express.json({limit: '50mb' }));

server.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there!');
});

server.listen(port, () => { 
    console.clear();
    console.log("Auth Service is running successfully!");
    console.log("Service is listening on port " + port); 
});