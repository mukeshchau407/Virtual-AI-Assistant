const express = require("express");
const { getCurrentUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/current", getCurrentUser);

module.exports = userRouter;
