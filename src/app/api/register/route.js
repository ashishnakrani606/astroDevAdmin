import User from "../../../../modules/user";
import { NextResponse } from "next/server";
import {connectMongoDb, disconnectMongoDb} from '../../../../library/mongodb';
import bcrypt from 'bcrypt';

export const POST = async (req) => {
    try {
        const {email, password, name} = await req.json();
        const hasPassword = await bcrypt.hash(password, 10);
        await connectMongoDb();
        await User.create({
            email, password:hasPassword, name
        })
        return NextResponse.json({
            message:"user create succesfullay........."
        },{
            status:201
        })

    } catch (error) {
        return NextResponse.json({
            message:"user create error"
        },{
            status:500
        })
    } finally {
        await disconnectMongoDb();
    }

}