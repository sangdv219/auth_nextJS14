'use server';

import { LoginChema } from '@/schemas';
import { revalidatePath, revalidateTag } from 'next/cache';

export const register = async(value:Zod.infer<typeof LoginChema>) =>{
    const validatedFields = LoginChema.safeParse(value);

    if(!validatedFields.success){
        return { error: "Invalid fields!"}
    }
    return { error: "Email sent!"}
} 