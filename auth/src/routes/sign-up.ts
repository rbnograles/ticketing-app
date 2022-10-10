import express, { Request, Response } from 'express';
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../middleware/validation';

export const router = express.Router();

router.get('/sign-up', [EMAIL_VALIDATION, PASSWORD_VALIDATION], (req: Request, res: Response) => {
        const { email, password } = req.body;
        
});

export { router  as signUpRouter};