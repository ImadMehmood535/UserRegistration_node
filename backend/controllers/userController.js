const asyncHandler = require("express-async-handler");
const User = require("../models/user")

const registerUser = asyncHandler(async (req, res) => {    
    
    const { name, email, password } = req.body;

       // Check if user email already exists
       const userExists = await User.findOne({ email });
    
       if (userExists) {
         res.status(400).json({"message": ` Already registered Email: ${email}`})
        }
 
      //create new user
      const user = await User.create({
        name : name,
        email : email,
        password : password
      })

      if(user){ return res.status(201).json({ "message": " successfully created new user",  name, email})
    
    
    }
      else{ return res.status(400).json({ "message": " Fail to create user"}) }


});

module.exports = registerUser;