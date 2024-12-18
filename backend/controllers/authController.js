import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }
  // hash password
  const salt = await bcryptjs.genSalt();
  const hashed = await bcryptjs.hash(password, salt);

  try {
    const user = await User.create({ username, email, password: hashed });
    res.status(200).json({ message: "User created", user });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });

    // check if user exists
    if (!validUser) {
     return next(errorHandler(404, "User not found"));
    }
    // check if password is valid
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }

    // generate token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    const {password: pass, ...rest} = validUser._doc;

    res.status(200).cookie("access_token", token, {
      httpOnly: true,
    }).json(rest);
  } catch (error) {
    next(error);
  }
};

export { signUp, signIn };
