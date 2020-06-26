import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcryptjs";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = hashSync(this.password, 12);
    return next();
  }
  return next();
});

UserSchema.methods = {
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
};
export default mongoose.model("User", UserSchema);
