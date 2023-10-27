import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";

import { createUser, getUser } from "./actions";
import { SessionInterface, UserProfile } from "@/common.types";

// authOptions is an object containing configuration options for NextAuth.js.
export const authOptions: NextAuthOptions = {
    providers: [
        // providers: An array of authentication providers. In this code, it configures Google authentication by specifying the client ID 
        // and client secret obtained from environment variables.
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    // jwt: Configuration for JSON Web Tokens (JWT).
    jwt: {
        // encode: A function that encodes a JWT token. It uses the jsonwebtoken library to sign the token with a provided secret 
        // and adds additional claims like issuer (iss) and expiration time (exp).
        encode: ({ secret, token }) => {
            const encodedToken = jsonwebtoken.sign(
                {
                    ...token,
                    iss: "grafbase",
                    exp: Math.floor(Date.now() / 1000) + 60 * 60,
                },
                secret
            );

            return encodedToken;
        },
        // decode: A function that decodes a JWT token using the provided secret.
        decode: async ({ secret, token }) => {
            const decodedToken = jsonwebtoken.verify(token!, secret);
            return decodedToken as JWT;
        },
    },
    // theme: Configuration for the appearance of the authentication pages, including the color scheme and logo.
    theme: {
        colorScheme: "light",
        logo: "/logo.svg",
    },
    // callbacks: Functions that are called during authentication and session handling.
    callbacks: {
        // session: A callback that is invoked when a user's session is retrieved. It attempts to fetch additional user data using the 
        // getUser function based on the user's email and enriches the session with this data.
        async session({ session }) {
            const email = session?.user?.email as string;

            try {
                const data = await getUser(email) as { user?: UserProfile }

                const newSession = {
                    ...session,
                    user: {
                        ...session.user,
                        ...data?.user,
                    },
                };

                return newSession;
            } catch (error: any) {
                console.error("Error retrieving user data: ", error.message);
                return session;
            }
        },
        // signIn: A callback that is called when a user signs in. It checks if the user exists and, if not, 
        // creates a new user using the createUser function.
        async signIn({ user }: {
            user: AdapterUser | User
        }) {
            try {
                const userExists = await getUser(user?.email as string) as { user?: UserProfile }

                if (!userExists.user) {
                    await createUser(user.name as string, user.email as string, user.image as string)
                }

                return true;
            } catch (error: any) {
                console.log("Error checking if user exists: ", error.message);
                return false;
            }
        },
    },
};

// getCurrentUser is an asynchronous function that uses getServerSession to retrieve the user's session based on the provided authOptions. 
// It returns the user's session, which includes user information and authentication data.
export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;

    return session;
}