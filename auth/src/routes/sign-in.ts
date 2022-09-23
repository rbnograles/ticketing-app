import express from 'express';

export const router = express.Router();

router.get('/sign-in',  (req, res) => { 
    res.send("Hi there!");
});

export { router  as signInRouter};