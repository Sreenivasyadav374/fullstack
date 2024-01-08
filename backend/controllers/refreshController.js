const jwt = require("jsonwebtoken");

const employee = require("../models/empModel");
require("dotenv").config();

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;

  //const dbuser = employee.find({ refreshToken: refreshToken });
  //User not found
  //if (!dbuser.length) {
  // return res.send("User doesnot have refreshToken"); //forbidden
  //}

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.sendStatus(403);
    }
    const accessToken = jwt.sign(
      { userName: decoded.userName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );

    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
