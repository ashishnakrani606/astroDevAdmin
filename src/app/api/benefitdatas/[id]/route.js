import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../../library/mongodb";
import Benefit from "../../../../../modules/benefit";


export async function PUT (req, {params}){
    const {id} = params;
    const {newTitle:title, newDescription:description} = request.json();
    await connectMongoDb();
    await Benefit.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message:"topic creare"}, {status:201});
}

export async function GET (req, {params}){
    const {id} = params;
    const {newTitle:title, newDescription:description} = request.json();
    await connectMongoDb();
    await benefit.findOne( {_id: id});
    return NextResponse.json({benefit}, {status:201});
}