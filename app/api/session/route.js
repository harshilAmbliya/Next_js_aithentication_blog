import { authOptions } from "@/libs/authOption";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
    const session = await getServerSession(authOptions);
    console.log(session.user)
    return NextResponse.json({ session: session }, { status: 200 });
}