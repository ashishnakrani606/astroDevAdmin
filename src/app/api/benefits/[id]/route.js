import { NextResponse } from "next/server";
import { connectMongoDb, disconnectMongoDb } from "../../../../../library/mongodb";
import Benefit from "../../../../../modules/benefit";
// const cors = require('cors')
// import Cors from "cors";



export async function PUT (request, {params}){
    const { id } = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDb();
    await Benefit.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message:"topic creare"}, {status:201});
}

export async function GET (request, {params}){
    const { id } = params;
    await connectMongoDb();
    const benefit = await Benefit.findOne( {_id: id});
    return NextResponse.json({benefit}, {status:201});
}