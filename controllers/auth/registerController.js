import User from "../../models/userModel.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/authUtils.js";

const roles = ["admin", "user"];

export const registerController = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    if (!roles.includes(role)) {
      return res.status(400).json({ message: "role does not exists." });
    }

    const user = await User.create({ email, password, role });
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict", // Proteger contra CSRF
    });

    res.status(200).json({ accessToken });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Server error" });
  }
};
