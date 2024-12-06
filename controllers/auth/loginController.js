import User from "../../models/userModel.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/authUtils.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    let isMatch = false;
    if (user) {
      isMatch = await user.matchPassword(password);
    }

    if (isMatch) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // Proteger contra CSRF
      });

      res.status(200).json({ accessToken });
    } else {
      return res.status(401).json({ message: "email or password invalid." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
