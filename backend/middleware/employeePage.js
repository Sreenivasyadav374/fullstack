const path = require("path");

const renderpage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/employees.html"));
  next();
};
module.exports = renderpage;
