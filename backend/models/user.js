const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  
}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
      return next();
    }
  
    //hasing 
    //hashing pass
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(this.password, salt)
    this.password = hashedPwd;
    next();
  
  })
  
  
  const User = mongoose.model("User", userSchema);
  module.exports = User;