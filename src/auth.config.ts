import Github from 'next-auth/providers/github'

import type { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from './data/user';
import bcrypt from 'bcryptjs'

export default {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials:{
                username: { label: "Email", type: "email", placeholder:"test@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                const validatedFields = LoginSchema.safeParse(credentials)
                if(validatedFields.success){
                    const { email, password } = validatedFields.data
                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    )
                    console.info('passwordsMatch', passwordsMatch);
                    if(passwordsMatch){
                        return user;
                    }
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig 