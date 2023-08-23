import Express from "express";
import dotenv from "dotenv";
import userSignup from "./controller/userSignup.js";
import userLogin from "./controller/userLogin.js";
import getUser from "./controller/getUser.js";
import connectDB from "./dbConnect.js";
import cors from "cors";
import authenticateToken from "./middlewares/authenticateToken.js";

dotenv.config();
const app = Express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(Express.json());
app.use(cors());

// Database connection
connectDB();

app.post("/signup", userSignup);
app.post("/login", userLogin);
app.get("/profile", authenticateToken, getUser);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
