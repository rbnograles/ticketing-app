export abstract class CustomError extends Error {
    abstract statusCode: number;

    // constructor function
    constructor(message: string) {
        super(message); // Override
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): {
        message: String;
        field?: String;
    }[];
}
