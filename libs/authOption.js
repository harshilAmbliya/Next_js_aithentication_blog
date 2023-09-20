import prisma from "@/prisma/prismadb";
import CredentialProvider from "next-auth/providers/credentials"

const bcrypt = require("bcryptjs")

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            name: 'Credentials',

            credentials: {

                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { username, password } = credentials;
                const hashedPassword = await bcrypt.hash(password, 10)
                if (!username || !password) {
                    throw new Error("Provide Username Or Password!")
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: username
                    }
                })
                // console.log(user)
                if (!user) {
                    throw new Error("Invalid Credentials")
                }
                const passwordMatch = await bcrypt.compare(password, hashedPassword)
                if (!passwordMatch) {
                    throw new Error("Invalid Password!")
                }

                return user

            }
        }),

    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ user, token }) {
            if (user) {
                token.id = user.id
            }
            console.log("jwt", token)
            return token
        },
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
            }
            console.log("session", session)
            return session
        },
        // async signIn({ user, account, profile, email, credentials }) {
        //     const isAllowedToSignIn = true
        //     if (isAllowedToSignIn) {
        //         return true
        //     } else {
        //         return '/login'
        //     }
        // }
    }

}