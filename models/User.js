const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dob: {
    type: Date
  },
  accountType: {
    type: String,
    required: true,
    default: "Patient"
  }
});

module.exports = User = mongoose.model("users", UserSchema);
