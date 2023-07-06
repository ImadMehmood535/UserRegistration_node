const asyncHandler = require("express-async-handler");
const User = require("../models/user")

const registerUser = asyncHandler(async (req, res) => {    
    
    const { name, email, password } = req.body;



      //create new user
      const user = await User.create({
        name : name,
        email : email,
        password : password
      })

      if(user){ return res.status(201).json({user})
    
    
    }
      else{ return res.status(400)}


});

module.exports = registerUser;