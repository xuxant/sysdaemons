const Admins = require('../model/Admins');

// @Method GET
// @desc Get All Admin Users
// @route /api/v1/admin/users
// access Public
exports.getAdminUsers = async (req, res, next) => {
  const admin = await Admins.find({});
  res.status(200).json({ Success: true, data: admin });
};

// @Method POST
// @desc Register Admin User
// @route /api/v1/admin/users
// access Private
exports.insertAdmins = async (req, res, next) => {};
