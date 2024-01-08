const employee = require("../models/empModel");

const getEmployees = async (req, res) => {
  const emp = await employee.find({});
  res.send(emp);
};

const postEmployee = async (req, res) => {
  const emp = await employee.create(req.body);
  res.send(req.body);
};

const getById = async (req, res) => {
  const emp = await employee.findOne({ userName: req.params.name });
  res.send(emp);
};

module.exports = { getById, getEmployees, postEmployee };
