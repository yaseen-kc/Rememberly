import mongoose from "mongoose";
const { Schema, Types, model } = mongoose;
import * as dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL!, {
    dbName: 'rememberly'
  })
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Database connection error:", error));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const tagSchema = new Schema({
  title: { type: String, required: true, unique: true },
});

const contentTypes = ["image", "video", "article", "audio"];

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "Tag" }],
  userId: { type: Types.ObjectId, ref: "User", required: true },
});

export const UserModel = model("User", userSchema);
export const TagModel = model("Tag", tagSchema);
export const ContentModel = model("Content", contentSchema);
