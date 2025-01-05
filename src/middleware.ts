import { NextFunction, Request, Response } from "express";
import jwt, { decode, JwtPayload } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

const JWT_SECRET = process.env.JWT_SECRET as string

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"]

    if (!header) {
        res.status(401).json({
            message: "Authorization header is missing",
        })
        return;
    }

    try {
        const decoded = jwt.verify(header, JWT_SECRET)
        if (decoded) {
            if (typeof decoded === "string") {
                res.status(403).json({
                    message: "You are not logged in"
                })
                return;
            }
            req.userId = (decoded as JwtPayload).id;
            next()
        }
    } catch (error) {
        res.status(403).json({
            message: "Invalid token",
        });
    }

};
