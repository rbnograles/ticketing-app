import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
    // constructor function
    constructor(public errors: ValidationError[]) {
        super(); // Override
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}
