import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error-interface";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    // constructor function
    constructor(public errors: ValidationError[]) {
        super("Invalid request parameters..."); // Override
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map((error) => {
            return {
                message: error.msg,
                field: error.param,
            };
        });
    }
}
