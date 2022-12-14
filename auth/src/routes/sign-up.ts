import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
    EMAIL_VALIDATION,
    PASSWORD_VALIDATION,
} from "../middleware/validation";
import { RequestValidationError } from "../errors/validation-error";

export const router = express.Router();

router.post(
    "/sign-up",
    [EMAIL_VALIDATION, PASSWORD_VALIDATION],
    async (req: Request, res: Response) => {
        // check for errors
        const errors = validationResult(req);
        // if there are any errors
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        res.send({});
    }
);

export { router as signUpRouter };
