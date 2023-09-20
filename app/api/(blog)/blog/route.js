import prisma from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blog = await prisma.blog.findMany();

    return NextResponse.json(blog, { status: 200 });
}