import { CustomError } from "./custom-error-interface";

export class DBConnectionError extends CustomError {
    statusCode = 500;
    reason = "Connection to the database failed...";
    // constructor function
    constructor() {
        super("Error connecting to the database..."); // Override
        Object.setPrototypeOf(this, DBConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.reason,
            },
        ];
    }
}
