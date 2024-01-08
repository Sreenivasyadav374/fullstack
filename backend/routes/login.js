const express = require("express");

const {
  handleNewUser,
  handleLogin,
} = require("../controllers/registerController");
const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleNewUser);

module.exports = router;
