import { Model, Document, Schema, model } from "mongoose";
import { Password } from "../utils/password";

// User Model Attributes
interface IUserAttr {
  email: string;
  password: string;
}

// User Model properties
interface IUserModel extends Model<UserDoc> {
  build(user: IUserAttr): UserDoc;
}

// User Document properties
interface UserDoc extends Document {
  email: string;
  password: string;
  // add additional properties if needed
}

// User Schema
const userSchema = new Schema<UserDoc, IUserModel>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// execute this whenever a save event happens
userSchema.pre("save", async function (done) {
  // hash only if password is newly created or has been updated
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

// Addition properties
userSchema.statics.build = (attrs: IUserAttr) => {
  return new UserModel(attrs);
};

export const UserModel = model<UserDoc, IUserModel>("User", userSchema);
