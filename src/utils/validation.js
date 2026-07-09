import joi from "joi";

export default joi.object({
    user_name:joi.string().max(100).required(),
    phone:joi.string().pattern().max(13).pattern(/^\+[1-9]\d{7,14}$/)
});