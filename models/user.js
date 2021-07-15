const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, 'please provide an username'],
      unique: true,
      maxlength: [20, 'username cannot be more than 20 characters'],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'please provide an email'],
      unique: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please  add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'please provide a password'],
      minlength: 6,
      select: false,
    },
    profileImage: {
      type: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
