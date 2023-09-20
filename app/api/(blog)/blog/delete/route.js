import prisma from "@/prisma/prismadb"
import { NextResponse } from "next/server"

export const DELETE = async (req) => {
    const { blog } = await req.json();
    const { id } = blog

    const blogData = await prisma.blog.delete({
        where: {
            id
        }
    })
    if (blogData) {
        return NextResponse.json({message :"deleted successfully" },{status:200},blog)
    }
    else {
        return NextResponse.json("failed to delete")
    }
}