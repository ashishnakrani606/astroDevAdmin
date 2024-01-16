import Category from "../../../../modules/category";
import { NextResponse } from "next/server";
import {connectMongoDb, disconnectMongoDb} from '../../../../library/mongodb';
// import Cors from 'cors';
// import { runMiddleware } from '../../../../library/middleware'; // Create this file with the provided function

// const cors = Cors({
// //   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: ['GET', 'POST', 'DELETE'],
// });

export async function POST (request){
    // await runMiddleware(req, res, cors);
    const{categorydata} = await request.json();
    await connectMongoDb();
    await Category.create({categorydata});
    return NextResponse.json({ categorydata }, {status:201});
}

export async function GET(){
    // await runMiddleware(req, res, cors);
    await connectMongoDb();
    const category = await Category.find();
    console.log(category)
    return NextResponse.json({category, message: "Users fetched successfully..."});

}
// export async function DELETE(request){
//     // await runMiddleware(req, res, cors);
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDb();
//     await Category.findByIdAndDelete(id);        
//     return NextResponse.json({message:"topic delete"}, {status:201});
// }
