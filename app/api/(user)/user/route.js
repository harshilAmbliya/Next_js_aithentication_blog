import prisma from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
    const user = await prisma.user.findMany();
    console.log(user)
    return NextResponse.json({ Users: user }, { status: 200 });
}