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

      if(user)    // check if user has been created
      { return res.status(201).json({"message": "Successfully created", name , email})
    
    
    }   // if not then
      else{ 
        return res.status(400).json({"message": "User was not created"})
    }


});

module.exports = registerUser;