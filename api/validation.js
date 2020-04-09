
//VALIDATION
const Joi = require('@hapi/joi');

//Register validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().min(4).required().email(),
        password: Joi.string().min(4).required(),
        first_name: Joi.string().min(1).required(),
        last_name: Joi.string().min(1).required(),
        phone_number: Joi.string().min(1).required()
    });
   return  schema.validate(data);
};

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(4).required().email(),
        password: Joi.string().min(4).required()
    });
    return  schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


