import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";

export const refreshAuthController = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return res.status(401).json({ message: "Refresh token required." });

  jwt.verify(refreshToken, JWT_SECRET, (error, user) => {
    if (error)
      return res.status(403).json({ message: "Refresh token required." });
    const accessToken = generateAccessToken(user);
    res.status(200).json({ accessToken });
  });
};
