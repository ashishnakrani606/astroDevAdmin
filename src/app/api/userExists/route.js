import User from "../../../../modules/user";
import { NextResponse } from "next/server";
import { connectMongoDb, disconnectMongoDb } from '../../../../library/mongodb';

export const POST = async (req) => {
    try {
        const { email } = await req.json();
        await connectMongoDb();
        const user = await User.findOne({ email }).select("_id")
        console.log('user', user);
        return NextResponse.json({
            user
        },
            {
                status: 200
            })
    } catch (error) {
        NextResponse.json({
            messsge: "not found user"
        },
            {
                status: 500
            })
    } finally {
        await disconnectMongoDb();
    }
}