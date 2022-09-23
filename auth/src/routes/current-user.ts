import express from 'express';

export const router = express.Router();

router.get('/current-user',  (req, res) => { 
    res.send("Hi there!");
});

export { router  as currentUserRouter};