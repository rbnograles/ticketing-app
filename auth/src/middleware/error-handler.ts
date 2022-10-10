import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/validation-error";
import { DBConnectionError } from "../errors/db-conn-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        const formattedError = err.errors.map((error) => {
            return {
                message: error.msg,
                field: error.param,
            };
        });
        return res.status(400).send({ errors: formattedError });
    }

    if (err instanceof DBConnectionError) {
        return res.status(500).send({ errors: [{ message: err.reason }] });
    }

    // if there are no recognized errors returns
    // then that means the server crashes
    res.status(500).send({
        errors: [{ message: "Oh no! Server crashes!!!" }],
    });
};
