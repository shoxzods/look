import joi from "joi";

export default joi.object({
    user_name:joi.string().max(100).required(),
    phone: joi.string().pattern(/^\+998\d{9}$/).required().messages({
            "string.pattern.base": "Phone number must be in the format +998901234567",
            "string.empty": "Phone number is required",
            "any.required": "Phone number is required"
        })
});