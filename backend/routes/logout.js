const express = require("express");

const handleLogout = require("../controllers/logoutController");
const router = express.Router();

router.get("/logout", handleLogout);

module.exports = router;
