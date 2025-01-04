import mongoose from "mongoose";
const { Schema, Types, model } = mongoose;

mongoose
  .connect(
    "mongodb+srv://admin:FfaClO9itsBVBXmF@cluster0.hhiek.mongodb.net/remberly"
  )
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Database connection error:", error));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model("User", userSchema);
