import { register , login } from "../controller/userController.js";
import { Router } from "express";
import { body, validationResult } from 'express-validator';
import { authenticateUser } from "../middleware/authMiddleware.js";
import { User } from "../model/UserSchema.js";

const router = Router();

// Middleware to check for validation errors
const validate = (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }
     next();
};

const registerValidation =[
     body('name').notEmpty().withMessage('please enter the name'),
     body('email').notEmpty().withMessage('please enter the email').isEmail()
      .custom(async (email) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
      throw new Error('Email already in use');
    }
  }),
  body('password').notEmpty().isLength({ min: 6 }).withMessage('password must be atleast 6 characters long')
]



router.post("/register", registerValidation, validate, register);
router.post("/login",
     authenticateUser ,
     login);

export default router;
