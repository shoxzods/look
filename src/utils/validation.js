import joi from "joi";

export default joi.object({
    user_name:joi.string().max(100).required(),
    phone: joi.string().required().max(13)
});