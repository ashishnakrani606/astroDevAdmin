import Benefit from "../../../../modules/benefit";
import { NextResponse } from "next/server";
import {connectMongoDb, disconnectMongoDb} from '../../../../library/mongodb';
import Cors from 'cors';
// import { runMiddleware } from '../../../../library/middleware'; // Create this file with the provided function

// const cors = Cors({
// //   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: ['GET', 'POST', 'DELETE'],
// });


export async function POST (request){
    // await runMiddleware(req, res, cors);
    const{title, description} = await request.json();
    await connectMongoDb();
    await Benefit.create({title, description});
    return NextResponse.json({ title, description }, {status:201});
}


// export async function POST(request) {
//     const session = await getSession({ req: request.req });
//     if (!session) {
//       // If user is not authenticated, return an error response
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }
//     const { title, description } = await request.json();
//     await connectMongoDb(); 
//     // Create a new benefit entry with the user's session information
//     await Benefit.create({ title, description, createdBy: session.user.id });
//     return NextResponse.json({ title, description }, { status: 201 });
//   }



export async function GET(){
    // await runMiddleware(req, res, cors);
    await connectMongoDb();
    const benefits = await Benefit.find();
    console.log(benefits)
    return NextResponse.json({benefits, message: "Users fetched successfully..."});

}



export async function DELETE(request){
    // await runMiddleware(req, res, cors);
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Benefit.findByIdAndDelete(id);        
    return NextResponse.json({message:"topic delete"}, {status:201});
}
// export const POST = async (req) => {
//     try {
//         const {title, description} = await req.json();
//         await connectMongoDb();
//         await Benefit.create({
//             title, description
//         })
//         return NextResponse.json({
//             title,
//             description,            
//         },{
//             status:201
//         })

//     } catch (error) {
//         return NextResponse.json({
//             message:"user create error"
//         },{
//             status:500
//     })
//     } finally {
//         await disconnectMongoDb();
//     }
// }

// export const GET = async () => {
//     try {
//         await connectMongoDb();
//         const benefits = await Benefit.find(); 
//         return NextResponse.json({
//             benefits,
//             message: "Users fetched successfully..."
//         }, {
//             status: 200
//         });
//     } catch (error) {
//         return NextResponse.json({

//             message: "Error fetching users"
//         }, {
//             status: 500
//         });
//     } finally {
//         await disconnectMongoDb();
//     }
// }


// export const DELETE = async (req) => {
//     try {
        
//         const { id }  = await req.json(); // Assuming you provide the userId to delete
//         await connectMongoDb();
//         const deletedUser = await Benefit.findByIdAndDelete(id);
        
//         if (deletedUser) {
//             return NextResponse.json({
//                 message: "User deleted successfully..."
//             }, {
//                 status: 200
//             });
//         } else {
//             return NextResponse.json({
//                 message: "User not found"
//             }, {
//                 status: 404
//             });
//         }
//     } catch (error) {
//         return NextResponse.json({
//             message: "Error deleting user"
//         }, {
//             status: 500
//         });
//     } finally {
//         await disconnectMongoDb();
//     }
// }


