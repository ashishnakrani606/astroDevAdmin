import Benefit from "../../../../modules/benefit";
import {connectMongoDb, disconnectMongoDb} from '../../../../library/mongodb';
import { NextResponse } from "next/server";

import bcrypt from 'bcrypt';


// export const POST = async (req) => {
// app.post("/new-benefit", async (req, resp) => {
//     try {
//         await connectMongoDb(); // Connect to MongoDB before processing the request

//         const benefit = new Benefit(req.body);
//         const result = await benefit.save();
//         resp.send(result);
//     } catch (error) {
//         resp.status(500).send({ error: "Failed to create new benefit." });
//     } finally {
//         await disconnectMongoDb(); // Disconnect from MongoDB after processing the request
//     }
// });

// app.get("/benefits", async (req, resp) => {
//     try {
//         await connectMongoDb(); // Connect to MongoDB before processing the request

//         const benefits = await Benefit.find();
//         if (benefits.length > 0) {
//             resp.send(benefits);
//         } else {
//             resp.send({ result: "No benefits found" });
//         }
//     } catch (error) {
//         resp.status(500).send({ error: "Failed to retrieve benefits." });
//     } finally {
//         await disconnectMongoDb(); // Disconnect from MongoDB after processing the request
//     }
// });

// app.delete("/benefits/:id", async (req, resp) => {
//     try {
//         await connectMongoDb(); // Connect to MongoDB before processing the request

//         const result = await Benefit.deleteOne({ _id: req.params.id });
//         resp.send(result);
//     } catch (error) {
//         resp.status(500).send({ error: "Failed to delete benefit." });
//     } finally {
//         await disconnectMongoDb(); // Disconnect from MongoDB after processing the request
//     }
// });
// }
export async function POST (request){
    const{title, description} = await request.json();
    await connectMongoDb();

    await Benefit.create({title, description});
    return NextResponse.json({message:"topic creare"}, {status:201});
}


export async function GET(){
    await connectMongoDb();
    const benefits = await Benefit.find();
    return NextResponse.json({benefits});

}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Benefit.findByIdAndDelete(id);    
    return NextResponse.json({message:"topic creare"}, {status:201});

}

// app.post("/addfaq", async (req, resp) => {
//     let faqs = new Faq(req.body);
//     let result = await faqs.save();
//     resp.send(result);
// });

// app.get("/faq", async (req, resp) => {
//     let faq = await Faq.find();
//     if (faq.length > 0) {
//         resp.send(faq)
//     }else{
//         resp.send({result: "no faq found"})
//     }
// })

// app.delete("/faq/:id", async(req, resp) => {
//     const result = await Faq.deleteOne({_id:req.params.id})
//     resp.send(result);
// })