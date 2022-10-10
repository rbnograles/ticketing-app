import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error-interface";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }

    // if there are no recognized errors returns
    // then that means the server crashes
    res.status(500).send({
        errors: [{ message: "Oh no! Server crashes!!!" }],
    });
};
