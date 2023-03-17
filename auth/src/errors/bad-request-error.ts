import { CustomError } from "./custom-error-interface";

export class BadRequestError extends CustomError {
  statusCode = 400;
  // constructor function
  constructor(public message: string) {
    super(message); // Override
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
