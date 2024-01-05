"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
export const login = async (value: Zod.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    console.info('result', result);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default: 
        return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
