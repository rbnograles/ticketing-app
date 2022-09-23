import express, { Request, Response } from 'express';
import { body } from 'express-validator';

export const router = express.Router();

router.get('/sign-up', [
        body('email')
            .isEmail()
            .withMessage("Email must be valid"),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20})
            .withMessage("Password must be at least 4 characters short and at least 20 characters long")
    ], 
    (req: Request, res: Response) => { 
    
        const { email, password } = req.body;
        
});

export { router  as signUpRouter};