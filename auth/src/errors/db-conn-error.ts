export class DBConnectionError extends Error {
    reason = "Connection to the database failed...";
    // constructor function
    constructor() {
        super(); // Override
        Object.setPrototypeOf(this, DBConnectionError.prototype);
    }
}
