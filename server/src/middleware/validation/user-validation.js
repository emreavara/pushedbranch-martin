import { body, validationResult } from 'express-validator';

const createUserValidator = [
    body('name').notEmpty().withMessage("Name is required"),
    body('username')
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3, max: 30 })
        .withMessage("Username must be between 3 and 30 characters!"),

    body('email')
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email address"),

    body('password').notEmpty().withMessage("password is required")
]

const loginUserValidator = [
    body('username')
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3, max: 30 })
        .withMessage("Username must be between 3 and 30 characters!"),

    body('password').notEmpty().withMessage("password is required")
]


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next()
}

export { createUserValidator, validate, loginUserValidator };