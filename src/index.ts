import express from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { UserModel } from "./db";
import { signUpValidation } from "./validations/authValidation";

export const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req, res): Promise<any> => {
  try {
    // Validate the input data
    const validatedData = signUpValidation.parse(req.body);
    const { username, password } = validatedData;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ where: { username } });
    if (existingUser) {
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
      user: { id: newUser.id, username: newUser.username },
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res
        .status(411)
        .json({ error: "Error in inputs", details: error.errors });
    }

    // General error handling
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/v1/signin", (req, res) => {});

app.post("/api/v1/content", (req, res) => {});

app.get("api/v1/content", (req, res) => {});

app.delete("api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000, () => {
  console.log("Server Started");
});
