import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Password {
  /**
   *
   * @param password : string
   * @returns hashed password : string
   */
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buff = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buff.toString("hex")}.${salt}`;
  }

  /**
   *
   * @param storedPassword : string
   * @param suppliedPassword : string
   */
  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(".");
    const buff = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buff.toString("hex") === hashedPassword;
  }
}
