const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./dbConnection");
const PORT = process.env.PORT || 3000;
const userDetails = require("./controller/userDetails");
const getUsersDetails = require("./controller/getUsersDetails");
const getDetails = require("./controller/getUsersDetails");
const updateUser = require("./controller/updateUser");
const replaceUser = require("./controller/updateUser");
const deleteUser = require("./controller/deleteUser");

const app = express();

app.use(express.json());

connectDB();
// Create
app.post("/register", userDetails);
// Read
app.get("/users", getUsersDetails);

app.get("/users/:id", getDetails);

// Update
app.put("/users/:id", replaceUser);
app.patch("/users/:id", updateUser);

// Delte

app.delete("/users/:id", deleteUser);

app.listen(PORT, () => {
  console.log(`Port running on ${PORT}`);
});
