const express = require("express");

const { getEmployees, getById } = require("../controllers/employees");

const router = express.Router();

router.get("/", getEmployees);
router.get("/:name", getById);
//router.post("/:id", (req, res) => {});

module.exports = router;
