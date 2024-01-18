import Benefit from "../../../../modules/benefit";
import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../library/mongodb";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';


export async function POST(request) {
    try {
        // await runMiddleware(request, cors); 
        const session = await getServerSession(authOptions);
        console.log(session)
        if (!session) {
            throw new Error("Unauthorized !...........");
        }
        const { title, description } = await request.json();
        await connectMongoDb();
        await Benefit.create({ title, description });
        return NextResponse.json({ title, description }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }
}

// export async function POST (request){
//     // await runMiddleware(req, res, cors);
//     const{title, description} = await request.json();
//     await connectMongoDb();
//     await Benefit.create({title, description});
//     return NextResponse.json({ title, description }, {status:201});
// }

export async function GET() {
  // await runMiddleware(req, res, cors);
  await connectMongoDb();
  const benefits = await Benefit.find();
  console.log(benefits);
  return NextResponse.json({
    benefits,
    message: "Users fetched successfully...",
  });
}

export async function DELETE(request) {
  // await runMiddleware(req, res, cors);
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Benefit.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic delete" }, { status: 201 });
}
