import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is invalid'
    }),
    password: z.string().min(5, {
        message: 'Password is required'
    })
});
export const RegisterChema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(1, {
        message: 'Password is required'
    }),
    name: z.string().min(1, {
        message: 'Name is required'
    })
});