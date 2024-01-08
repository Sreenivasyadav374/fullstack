const handleLogout = async (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ message: "Logged Out" });
};

module.exports = handleLogout;
