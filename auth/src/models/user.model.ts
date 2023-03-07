import { Model, Document, Schema, model } from "mongoose";

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

// Addition properties
userSchema.statics.build = (attrs: IUserAttr) => {
  return new UserModel(attrs);
};

export const UserModel = model<UserDoc, IUserModel>("User", userSchema);
