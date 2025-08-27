const express = require("express");
const { signup, login, logout } = require("../controllers/authController.js");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/logout", logout);
authRouter.post("/login", login);

module.exports = authRouter;
