import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import * as dotenv from "dotenv";
import { ContentModel, UserModel } from "./db";
import { signUpValidation } from "./authValidation";
import { userMiddleware } from "./middleware";

// Load environment variables
dotenv.config();

// Initialize the app
export const app = express();
app.use(express.json());

// Routes

// User Authentication Routes
app.post("/api/v1/signup", async (req, res): Promise<any> => {
  try {
    const validatedData = signUpValidation.parse(req.body);
    const { username, password } = validatedData;

    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      console.log("User already exists with username:", username);
      return res
        .status(403)
        .json({ error: "User already exists with this username" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username: username,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "Signed up successfully",
      user: { id: newUser._id, username: newUser.username },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(411)
        .json({ error: "Error in inputs", details: error.errors });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/v1/signin", async (req, res): Promise<any> => {
  try {
    const validatedData = signUpValidation.parse(req.body);
    const { username, password } = validatedData;

    const user = await UserModel.findOne({ username });

    if (!user) {
      console.log("Invalid username provided:", username);
      return res.status(403).json({ error: "Wrong username or password" });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      console.log("Invalid password for username:", username);
      return res.status(403).json({ error: "Wrong username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Content Management Routes
app.post("/api/v1/content", userMiddleware, async (req, res): Promise<any> => {
  try {
    const { link, type, title } = req.body;

    await ContentModel.create({
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

app.get("/api/v1/content", userMiddleware, async (req, res): Promise<any> => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const content = await ContentModel.find({ userId })
      .populate("userId", "username");

    if (!content.length) {
      return res.status(404).json({ success: false, message: "No content found" });
    }

    return res.json({
      success: true,
      content
    });

  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch content" });
  }
});

app.delete("/api/v1/content", async (req, res): Promise<any> => {
  try {
    const { contentId } = req.body;

    if (!contentId) {
      return res.status(400).json({ error: "Content ID is required" })
    }

    await ContentModel.deleteMany({
      contentId,
      userId: req.userId
    })

    res.status(200).json({ message: "Content deleted successfully" })

  } catch (error) {

    return res.status(500).json({ error: "Failed to delete content" });

  }
});

app.post("/api/v1/brain/share", (req, res) => {
});

app.get("/api/v1/brain/:shareLink", (req, res) => {
});

// Start the server
app.listen(3000, () => {
  console.log("Server Started");
});
