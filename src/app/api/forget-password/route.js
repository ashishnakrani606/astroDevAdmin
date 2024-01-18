// import { getSession } from 'next-auth/react';
import User from "../../../../modules/user";
import { NextResponse } from "next/server";
import { connectMongoDb, disconnectMongoDb } from "../../../../library/mongodb";
import cryptoRandomString from "crypto-random-string";
import Cryptr from "cryptr";
import { render } from "@react-email/render";
import ForgotPasswordEmail from "../../../../emails/ForgotPasswordEmail";
import { sendEmail } from "../../../../config/mail";
import { getSession } from "next-auth/react";

export const POST = async (req) => {
  try {
    // Check for session
    const session = await getSession({ req: request.req });
    console.log("object",session);


    if (!session || !session.user_id) {
        console.log("Session not found", !session?.user_id);
        return NextResponse.json({
            message: 'Unauthorized - Session not found',
        }, {
            status: 401,
        });
    }

    // Continue with the password reset logic
    const payload = await req.json();
    await connectMongoDb();
    const user = await User.findOne({ email: payload.email });

    if (!user) {
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

    // Encrypt user email
    const crypt = new Cryptr(process.env.NEXTAUTH_SECRET);
    const encryptedEmail = crypt.encrypt(user.email);

    const url = `${process.env.APP_URL}/reset-password/${encryptedEmail}?signature=${randomStr}`;
    try {
      const html = render(
        ForgotPasswordEmail({
          params: {
            name: user.name,
            url: url,
          },
        })
      );

      // Send email to user
      await sendEmail(payload.email, "Reset Password", html);
      return NextResponse.json({
        status: 200,
        message: "Email sent successfully. Please check your email.",
      });
    } catch (error) {
      console.log("Error sending email:", error);
      return NextResponse.json({
        status: 500,
        message: "Something went wrong. Please try again!",
      });
    }
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong. Please try again!",
    });
  } finally {
    await disconnectMongoDb();
  }
};

// Similar checks can be added for other API routes (DELETE, PATCH, etc.)
