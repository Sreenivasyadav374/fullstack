const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();
const cors = require("cors");
const verifyJWT = require("./middleware/verifyJWT");
const PORT = process.env.PORT || 3500;
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    app.listen(3000, (err) => {
      if (err) {
        console.log("Error");
      }
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

const employeeRoute = require("./routes/employees");
const home = require("./routes/home");
const login = require("./routes/login");
const refresh = require("./routes/refresh");
const logout = require("./routes/logout");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());

app.use("/", home);
app.use("/", login);
app.use("/", logout);
app.use("/refresh", refresh);

app.use(verifyJWT);
app.use("/employees", employeeRoute);
