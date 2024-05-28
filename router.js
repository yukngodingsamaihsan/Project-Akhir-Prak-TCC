const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/register", controller.create);
router.get("/login",controller.findUser);