const { body, validationResult } = require('express-validator');

const validateRegistrationData = [
    // Validate username
    body('name')
      .notEmpty()
      .withMessage('Username is required'),
  
    // Validate email
    body('email')
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Invalid email address'),
  
    // Validate password
    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ];

  const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
  
  module.exports = {
    validateRegistrationData,
    handleValidationErrors,
  };