const express = require("express");
const router = express.Router();
const User = require("../models/user");
const registerUser = require("../controllers/userController");
const {validateRegistrationData, handleValidationErrors} = require("../middlewares/validator")

//route to business logic and  using express-validator before POST the data into database 
router.post("/register",validateRegistrationData, handleValidationErrors ,registerUser )



module.exports = router;