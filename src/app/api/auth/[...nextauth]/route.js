import User from "../../../../../modules/user"
import { connectMongoDb, disconnectMongoDb } from '../../../../../library/mongodb';
import bcrypt from 'bcrypt';
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider(
        {
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDb();
                    const user = await User.findOne({email});
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if (!passwordMatch) {
                        return null;
                    }
                    console.log('user', user)
                    return user;

                } catch (error) {
                    console.log('error', error)
                } finally {
                    await disconnectMongoDb();
                }
            }
        })],
    session: {
        strategy: "jwt",
    },
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };