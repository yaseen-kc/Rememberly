import mongoose from "mongoose";
const { Schema, Types } = mongoose;

mongoose
	.connect("mongodb+srv://admin:FfaClO9itsBVBXmF@cluster0.hhiek.mongodb.net/")
	.catch((error) => console.error(error));

const usersSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const contentTypes = ["images", "video", "article", "audio"];

const contentSchema = new Schema({
	link: { type: String, requied: true },
	type: { type: String, enum: contentTypes, required: true },
	title: { type: String, required: true },
	tags: [{ type: Types.ObjectId, ref: "Tag" }],
	userId: { type: Types.ObjectId, ref: "User", required: true },
});

const linkSchema = new mongoose.Schema({
	hash: { type: String, required: true },
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
