import User from "../../../../modules/user";
import { NextResponse } from "next/server";
import { connectMongoDb, disconnectMongoDb } from '../../../../library/mongodb';
import cryptoRandomString from "crypto-random-string";
import Cryptr from 'cryptr';
import { render } from "@react-email/render"; // Import the render function
import ForgotPasswordEmail from "../../../../emails/ForgotPasswordEmail";
import { sendEmail } from "../../../../config/mail"; // Import the sendEmail function

export const POST = async (req) => {
    const payload = await req.json();
    try {
        // const { email } = payload;

        await connectMongoDb();
        const user = await User.findOne({ email: payload.email });

        if (user == null) {
            return NextResponse.json({
                status: 400,
                errors: {
                    email: "No user found with this email.",
                },
            });
        }

        const randomStr = cryptoRandomString({
            length: 64,
            type: "alphanumeric",
        });
        user.password_reset_token = randomStr;
        await user.save();


        // * Encrypt user email

        console.log('Cryptr created:', process.env.NEXT_PUBLIC_NEXTAUTH_SECRET);
        const crypt = new Cryptr(process.env.NEXT_PUBLIC_NEXTAUTH_SECRET);
        
        const encryptedEmail = crypt.encrypt(user.email);
        console.log('Encrypted Email:', encryptedEmail);
        
        const url = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${encryptedEmail}?signature=${randomStr}`;
        try {
            const html = render(
                ForgotPasswordEmail({
                    params: {
                        name: user.name,
                        url: url,
                    },
                })
            );
            console.log("html", html); 

            // * Send email to user
            await sendEmail(payload.email, "Reset Password", html);
            return NextResponse.json({
                status: 200,
                message: "Email sent successfully. Please check your email.",
            });
        } catch (error) {
            console.log("the error is", error);
            return NextResponse.json({
                status: 500,
                message: "Something went wrong. Please try again!",
            });
        }
    } catch (error) {
        console.log("User create error:", error);
        return NextResponse.json({
            status: 500,
            message: "User create error",
        });
    } finally {
        await disconnectMongoDb();
    }
};
