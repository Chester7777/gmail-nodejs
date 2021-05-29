const {check} = require("express-validator")

exports.contactFormValidation = [
    check("name")
        .not()
        .isEmpty()
        .withMessage("Please type your name"),
    check("email")
        .isEmail()
        .withMessage("Please type your email"),
    check("message")
        .not()
        .isEmpty()
        .isLength({min: 10})
        .withMessage("Message should be at least 10 characters long"),
]