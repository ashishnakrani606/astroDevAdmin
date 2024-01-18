import { NextResponse } from "next/server";
import { connectMongoDb, disconnectMongoDb } from "../../../../../library/mongodb";
import Category from "../../../../../modules/category";
// const cors = require('cors')
// import Cors from "cors";

export async function PUT (request, {params}){
    const { id } = params;
    const {newCategory: categorydata} = await request.json();
    await connectMongoDb();
    await Category.findByIdAndUpdate(id, {categorydata});
    return NextResponse.json({message:"topic creare"}, {status:201});
}

export async function GET (request, {params}){
    const { id } = params;
    await connectMongoDb();
    const category = await Category.findOne( {_id: id});
    return NextResponse.json({category}, {status:201});
}

