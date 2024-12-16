import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { userRoutes } from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/users', userRoutes)

app.get('/', (req, res) =>{
  res.send("Server connected")
})

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
