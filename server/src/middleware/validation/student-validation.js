import { body, validationResult } from 'express-validator';

const createStudentValidator = [
    body('name').notEmpty().withMessage("Name is required"),
    body('surname').notEmpty().withMessage("Surname is required"),
    body('email')
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email address"),

    body('password').notEmpty().withMessage("password is required")
]

const loginStudentValidator = [
     body('password').notEmpty().withMessage("password is required")
]


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next()
}

export { createStudentValidator, validate, loginStudentValidator };