import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(401).json({ message: "Please fill all fields" });
  }

  // hash password
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({ username, email, password: hashed });
    res.status(200).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { signUp };
