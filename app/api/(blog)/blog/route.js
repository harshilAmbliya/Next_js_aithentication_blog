import prisma from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
    const blog = await prisma.blog.findMany();
    console.log(user)
    return NextResponse.json({ BLogs: blog }, { status: 200 });
}