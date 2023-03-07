import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from "../middleware/validation";
import { RequestValidationError } from "../errors/validation-error";
import { UserModel } from "../models/user.model";

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

    // destructure email
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      console.log("This email is used.");
      return res.send({});
    }

    const user = UserModel.build({ email, password });
    await user.save();

    return res.status(201).send(user);
  }
);

export { router as signUpRouter };
