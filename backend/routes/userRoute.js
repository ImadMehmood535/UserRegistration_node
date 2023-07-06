const express = require("express");
const router = express.Router();
const User = require("../models/user");
const registerUser = require("../controllers/userController");
const {validateRegistrationData, handleValidationErrors} = require("../middlewares/validator")

//HTTP post route
router.post("/register",validateRegistrationData, handleValidationErrors ,registerUser )



module.exports = router;