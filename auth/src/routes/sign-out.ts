import express from 'express';

export const router = express.Router();

router.get('/sign-out',  (req, res) => { 
    res.send("Hi there!");
});

export { router  as signOutRouter};