import { body } from 'express-validator';

export const EMAIL_VALIDATION = 
    body('email').isEmail().withMessage("Email must be valid");


export const PASSWORD_VALIDATION = 
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage("Password must be at least 4 characters short and at least 20 characters long");