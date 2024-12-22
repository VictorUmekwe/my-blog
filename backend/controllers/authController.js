import User from "../models/userModels.js";
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js";


const signUp = async (req, res, next) => {
   const {username, email, password} = req.body;

   // check all fields
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, "All fields are required"));
    }
    
     // hash password 
      const salt = await bcrypt.genSalt();
      const hashed = await bcrypt.hash(password, salt);
    try {
        const user = await User.create({username, email, password: hashed})
        res.status(201).json({message: "User created", user})
    } catch (error) {
        next(error);
    }
}


export {signUp}