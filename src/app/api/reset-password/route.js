import { NextResponse } from "next/server";
import Cryptr from "cryptr";
// import Env from "@/config/env";
import { connectMongoDb, disconnectMongoDb } from '../../../../library/mongodb';
import bcrypt from 'bcrypt';
import User from "../../../../modules/user";

export async function POST(request) {
  const payload = await request.json();

  const crypter = new Cryptr(process.env.NEXTAUTH_SECRET);
  const email = crypter.decrypt(payload.email);

  try {
    await connectMongoDb();
    console.log("Decrypted email:", email);
    console.log("Payload signature:", payload.signature);
    const user = await User.findOne({
      email: email,
      password_reset_token: payload.signature,
    });
    console.log("User found:", user);
    if (!user) {
      return NextResponse.json({
        status: 400,
        message: "Reset URL is not correct. Please double-check it.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(payload.password, salt);
    user.password_reset_token = null;
    await user.save();

    return NextResponse.json({
      status: 200,
      message: "Password changed successfully. Please login with the new password.",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  } finally {
    await disconnectMongoDb(); // Disconnect after successful password change or in case of an error
  }
}
