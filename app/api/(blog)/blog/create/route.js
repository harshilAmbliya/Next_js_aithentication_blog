import prisma from "@/prisma/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOption";


export const POST = async (req) => {

    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    const { title, description, image, slug } = await req.json();
    const blog = await prisma.blog.create({
        data: {
            title,
            description,
            image,
            slug,
            userId
        }
    });
   
    return NextResponse.json({ blog: blog }, { status: 201 });
}