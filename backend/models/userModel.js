
// npm i bcryptjs jsonwebtoken validator nodemailer cookie-parser body-parser
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  avatar: 
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
// function used instead of => as "this.isModified is not a function" is we use arrow function an error will emerge
//encrypting the password in database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}
//generating password reset token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");


  //Hashing and resetPasswordToken  adding  to user schema

  this.resetPasswordToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex")
  this.resetPasswordExpire = Date.now() + 1000000 * 60 * 1000;
  // resetPasswordExpire: { $gt: Date.now() },
  return (resetToken)

   //In the execute node js online
  /*const crypto = require("crypto");

const token = crypto.randomBytes(20).toString("hex")

console.log(token)

const tokenCrypto = crypto.createHash("sha256").update(token).digest("hex")

console.log(tokenCrypto)
 */
  //generating the token
  // Instead



}
module.exports = mongoose.model("User", userSchema);