import Joi from "joi";
import { ContactFormValues } from "../types/contactForm.types";


export const contactSchema = Joi.object<ContactFormValues>({
    name: Joi.string().trim().min(5).required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Message must be at least 5 characters long',
    }),
    email: Joi.string()
        .trim()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Please enter a valid email address',
        }),
    message: Joi.string().trim().min(10).required().messages({
        'string.empty': 'Message is required',
        'string.min': 'Message must be at least 10 characters long',
    }),
});
