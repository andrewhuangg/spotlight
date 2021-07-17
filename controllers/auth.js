const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc      Register new user
// @route     POST /api/auth/register
// @access    Public

exports.register = async (req, res, next) => {
  try {
    const { username, email, password, profileImage, isAdmin } = req.body;

    // check if user exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({
        error: 'user already exists',
      });
    }

    // hash and salt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      profileImage,
      isAdmin,
    });

    if (newUser) {
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public

exports.login = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select('+password');

    // check if user is found
    if (!user) {
      return res.status(400).json({ error: 'invalid user' });
    }

    // check for matched password
    const matchedPassword = await bcrypt.compare(req.body.password, user.password);

    if (!matchedPassword) {
      return res.status(400).json({ error: 'login failed' });
    }

    // get signed JWT token
    const signedToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    // return everything but the password
    const { password, ...userInfo } = user._doc;

    if (user && matchedPassword) {
      res.status(200).json({ ...userInfo, signedToken });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
