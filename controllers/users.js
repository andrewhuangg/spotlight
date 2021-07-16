const User = require('../models/user');
const bcrypt = require('bcryptjs');

// @desc      Update user
// @route     PUT /api/users/:id
// @access    Private

exports.updateUser = async (req, res, next) => {
  try {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      if (req.body.password) {
        // hash and salt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
      }

      const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });

      return res.status(200).json(user);
    } else {
      res.status(403).json('you are not authorized to update this account');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc      Delete user
// @route     DELETE /api/users/:id
// @access    Private

exports.deleteUser = async (req, res, next) => {
  try {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      await User.findByIdAndDelete(req.user.id);
      return res.status(200).json('User has been deleted...');
    } else {
      res.status(403).json('you are not authorized to delete this account');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc      FETCH user
// @route     GET /api/users/:id
// @access    Public

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json('user was not found');
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc      FETCH all users
// @route     GET /api/users | /api/users/new?=true
// @access    Private

exports.getUsers = async (req, res, next) => {
  try {
    const query = req.query.new;
    if (req.user.isAdmin) {
      const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
      return res.status(200).json(users);
    } else {
      res.status(403).json('you are not authorized to see new users');
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc      FETCH user stats
// @route     GET /api/users/stats
// @access    Private

exports.getUserStats = async (req, res, next) => {
  try {
    // total users by month
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
