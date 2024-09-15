import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
    collection: "user",
  }
);

export default model("User", userSchema);
