const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const employee = require("../models/empModel");
require("dotenv").config();

const handleNewUser = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  const duplicate = await employee.find({ userName: userName });
  if (duplicate.length) {
    return res.status(409).json({ message: "Username already exists" });
  }
  try {
    const hashedpw = await bcrypt.hash(password, 10);
    await employee.create({ userName: userName, password: hashedpw });
    return res.send("Registered successfully");
  } catch (err) {
    return res.json({ message: err.message });
  }
};

const handleLogin = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.json({ message: "Username and password are required" });
  }
  const dbuser = await employee.find({ userName: userName });
  //User not found
  if (!dbuser.length) {
    return res.send("User doesnot exist");
  }
  try {
    if (await bcrypt.compare(password, dbuser[0].password)) {
      //create JWTs
      const accesstoken = jwt.sign(
        { userName: dbuser[0].userName },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30m" }
      );
      const refreshtoken = jwt.sign(
        { userName: dbuser[0].userName },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      res.cookie("jwt", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res
        .status(200)
        .json({ message: "Success", accessToken: accesstoken });
    } else {
      return res.status(400).json({ message: "Password doesnot match" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handleNewUser, handleLogin };
