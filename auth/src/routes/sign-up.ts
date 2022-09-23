import express from 'express';

export const router = express.Router();

router.get('/sign-up',  (req, res) => { 
    res.send("Hi there!");
});

export { router  as signUpRouter};