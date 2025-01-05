import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

import * as dotenv from "dotenv";
dotenv.config();

import { Content, UserModel } from "./db";
import { signUpValidation } from "./authValidation";

export const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req, res): Promise<any> => {
  try {
    // Validate the input data
    const validatedData = signUpValidation.parse(req.body);

    const { username, password } = validatedData;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      console.log("User already exists with username:", username);
      return res
        .status(403)
        .json({ error: "User already exists with this username" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await UserModel.create({
      username: username,
      password: hashedPassword,
    });

    // Send the success response
    res.status(200).json({
      message: "Signed up successfully",
      user: { id: newUser._id, username: newUser.username },
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res
        .status(411)
        .json({ error: "Error in inputs", details: error.errors });
    }

    // General error handling
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/v1/signin", async (req, res): Promise<any> => {
  try {
    // Validate the input data
    const validatedData = signUpValidation.parse(req.body);

    const { username, password } = validatedData;

    // Find the user in the database
    const user = await UserModel.findOne({ username });

    if (!user) {
      console.log("Invalid username provided:", username);
      return res.status(403).json({ error: "Wrong username or password" });
    }

    // Compare the password
    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      console.log("Invalid password for username:", username);
      return res.status(403).json({ error: "Wrong username or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/v1/content", async (req, res): Promise<any> => {
  try {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    await Content.create({
      type: type,
      link: link,
      title: title,
      userId: req.userId,
      tags: [],
    });

    res.status(201).json({
      message: "Content added successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("api/v1/content", (req, res) => { });

app.delete("api/v1/content", (req, res) => { });

app.post("/api/v1/brain/share", (req, res) => { });

app.get("api/v1/brain/:shareLink", (req, res) => { });

app.listen(3000, () => {
  console.log("Server Started");
});
