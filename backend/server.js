import Express from "express";
import dotenv from "dotenv";
import userRegistration from "./controller/user.js";
import userLogin from "./controller/getUser.js";
import connectDB from "./dbConnect.js";
import cors from "cors"

dotenv.config();
const app = Express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(Express.json());
app.use(cors());

// Database connection
connectDB();

app.post("/signup", userRegistration);
app.post("/login", userLogin);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
