import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};
