const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Add The Name.']
    },
    upwork_name: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'Please Add Your Email.'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    role: {
      type: String,
      enum: ['admin', 'editor', 'publisher'],
      default: 'publisher'
    },
    password: {
      type: String,
      required: [true, 'Please Insert Your Password.'],
      minlength: 10,
      select: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Admins', UserSchema);
